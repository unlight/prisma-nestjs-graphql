import { ClassDeclaration, SourceFile } from 'ts-morph';

import { DecoratorPropertyType, generateClass, generateClassProperty } from '../generate-class';
import { generateDecorator } from '../generate-decorator';
import { generateGraphqlImport } from '../generate-graphql-import';
import { generateProjectImport } from '../generate-project-import';
import { toGraphqlImportType, toPropertyType } from '../type-utils';
import { PrismaDMMF } from '../types';

type GenerateInputArgs = {
    inputType: PrismaDMMF.InputType;
    sourceFile: SourceFile;
    model: PrismaDMMF.Model | undefined;
    projectFilePath(data: { name: string; type: string }): string;
    decorator: DecoratorPropertyType;
};

export function generateInput(args: GenerateInputArgs) {
    const { inputType, sourceFile, projectFilePath, model, decorator } = args;
    const className = inputType.name;
    const classDeclaration = generateClass({
        sourceFile,
        decorator,
        name: className,
    });
    generateGraphqlImport({ name: 'Field', sourceFile, moduleSpecifier: '@nestjs/graphql' });
    for (const field of inputType.fields) {
        const inputType = getMatchingInputType(field.inputType);
        const modelField = model?.fields.find((f) => f.name === field.name);
        const nullable =
            modelField?.isRequired !== undefined ? !modelField.isRequired : inputType.isNullable;
        const propertyType = getPropertyType({ field, nullable });
        generateInputProperty({
            inputType,
            propertyType,
            classDeclaration,
            sourceFile,
            projectFilePath,
            className,
            name: field.name,
        });
    }
}

type GenerateInputPropertyArgs = {
    name: string;
    inputType: PrismaDMMF.SchemaArgInputType;
    sourceFile: SourceFile;
    projectFilePath(data: { name: string; type: string }): string;
    className: string;
    classDeclaration: ClassDeclaration;
    propertyType: string;
};

function generateInputProperty(args: GenerateInputPropertyArgs) {
    const { inputType, sourceFile, className, classDeclaration, projectFilePath } = args;
    const propertyDeclaration = generateClassProperty({
        name: args.name,
        type: args.propertyType,
        classDeclaration,
        isReadOnly: false,
        isRequired: false,
    });
    let fieldType = getFieldType(inputType);
    if (inputType.kind === 'scalar') {
        const importType = toGraphqlImportType({
            kind: inputType.kind,
            type: fieldType,
            isId: false,
        });
        // Override return field type value
        fieldType = importType.name;
        generateGraphqlImport({
            sourceFile,
            ...importType,
        });
    } else if (inputType.kind === 'object' && inputType.type !== className) {
        generateProjectImport({
            name: fieldType,
            type: 'input',
            sourceFile,
            projectFilePath,
        });
    } else if (inputType.kind === 'enum') {
        generateProjectImport({
            name: fieldType,
            type: 'enum',
            sourceFile,
            projectFilePath,
        });
    }
    generateDecorator({
        propertyDeclaration,
        fieldType: inputType.isList ? `[${fieldType}]` : fieldType,
        nullable: true,
    });
}

type GetPropertyTypeArgs = {
    field: PrismaDMMF.SchemaArg;
    nullable: boolean;
};

function getPropertyType(args: GetPropertyTypeArgs): string {
    const { field, nullable } = args;
    const inputTypes = field.inputType;
    let result = inputTypes
        .map((inputType) => {
            const type = getTypeName(inputType);
            return toPropertyType({ kind: inputType.kind, type });
        })
        .join(' | ');
    if (inputTypes.every((t) => t.isList)) {
        result = ['AND', 'NOT', 'in', 'notIn'].includes(field.name)
            ? `${result} | Array<${result}>`
            : `Array<${result}>`;
    }
    if (!inputTypes.find((t) => t.type === 'null') && nullable) {
        result = `${result} | null`;
    }
    return result;
}

function getMatchingInputType(inputTypes: PrismaDMMF.SchemaArgInputType[]) {
    if (inputTypes.length === 1) {
        return inputTypes[0];
    }
    const inputType = inputTypes.find((x) => x.kind === 'object');
    if (inputType) {
        return inputType;
    }
    if (inputTypes.every((t) => t.kind === 'scalar')) {
        const [result] = inputTypes.filter((t) => t.type !== 'null').slice(-1);
        return result;
    }
    // console.log('inputTypes', inputTypes);
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    throw new TypeError(`Cannot get matching input type from ${inputTypes.map((x) => x.type)}`);
}

function getFieldType(inputType: PrismaDMMF.SchemaArgInputType) {
    return String(inputType.type);
}

function getTypeName(inputType: PrismaDMMF.SchemaArgInputType) {
    return typeof inputType.type === 'string' ? inputType.type : 'unknown';
}
