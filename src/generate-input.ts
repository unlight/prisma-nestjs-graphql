import { DMMF as PrismaDMMF } from '@prisma/client/runtime/dmmf-types';
import assert from 'assert';
import { SourceFile } from 'ts-morph';

import { generateClass, generateClassProperty } from './generate-class';
import { generateDecorator } from './generate-decorator';
import { generateGraphqlImport } from './generate-graphql-import';
import { generateProjectImport } from './generate-project-import';
import { toGraphqlImportType } from './to-graphql-import-type';
import { toPropertyType } from './to-property-type';

type GenerateInputArgs = {
    inputType: PrismaDMMF.InputType;
    sourceFile: SourceFile;
    projectFilePath(data: { name: string; type: string }): string;
};

export function generateInput(args: GenerateInputArgs) {
    const { inputType, sourceFile, projectFilePath } = args;
    const className = inputType.name;
    const classDeclaration = generateClass({
        sourceFile,
        decorator: {
            name: 'InputType',
            properties: [],
        },
        name: className,
    });
    for (const field of inputType.fields) {
        const inputType = getMatchingInputType(field.inputType);
        const propertyType = getPropertyType(field);
        const propertyDeclaration = generateClassProperty({
            name: field.name,
            type: propertyType,
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
        generateGraphqlImport({ name: 'Field', sourceFile, moduleSpecifier: '@nestjs/graphql' });
        generateDecorator({
            propertyDeclaration,
            fieldType: inputType.isList ? `[${fieldType}]` : fieldType,
            nullable: true,
        });
    }
}

function getPropertyType(field: PrismaDMMF.SchemaArg): string {
    const inputTypes = field.inputType;
    let result = inputTypes
        .map((inputType) => {
            const type = getTypeName(inputType);
            return toPropertyType({ kind: inputType.kind, type });
        })
        .join(' | ');
    if (field.isRelationFilter || inputTypes.every((t) => t.isList)) {
        assert(inputTypes.length === 1);
        result = `${result} | ${result}[]`;
    }
    if (!inputTypes.find((t) => t.type === 'null')) {
        // TODO: To make it compatible with prisma we need get model here
        // const nullable = inputTypes.every((t) => t.isNullable);
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
