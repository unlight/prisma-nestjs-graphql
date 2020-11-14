import { ClassDeclaration, SourceFile } from 'ts-morph';

import { DecoratorPropertyType, generateClass, generateClassProperty } from '../generate-class';
import { generateDecorator } from '../generate-decorator';
import { generateImport, generateProjectImport } from '../generate-import';
import { PrismaDMMF } from '../types';
import { toGraphqlImportType, toPropertyType } from '../utils';
import { getMatchingInputType } from './get-matching-input-type';

type GenerateInputArgs = {
    inputType: PrismaDMMF.InputType;
    sourceFile: SourceFile;
    projectFilePath(data: { name: string; type: string }): string;
    decorator: DecoratorPropertyType;
};

export function generateInput(args: GenerateInputArgs) {
    const { inputType, sourceFile, projectFilePath, decorator } = args;
    const className = inputType.name;
    const classDeclaration = generateClass({
        sourceFile,
        decorator,
        name: className,
    });
    generateImport({ name: 'Field', sourceFile, moduleSpecifier: '@nestjs/graphql' });
    for (const field of inputType.fields) {
        const inputType = getMatchingInputType(field.inputTypes);
        const propertyTypes = field.inputTypes.map((t) =>
            toPropertyType({ ...t, type: String(t.type) }),
        );
        // Additional import all objects
        const inputTypes = field.inputTypes.filter(
            (x) => ['object', 'enum'].includes(x.kind) && x.type !== className,
        );
        for (const inputType of inputTypes) {
            generateProjectImport({
                name: String(inputType.type),
                type: inputType.kind === 'object' ? 'input' : inputType.kind,
                sourceFile,
                projectFilePath,
            });
        }
        generateInputProperty({
            inputType,
            propertyTypes,
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
    propertyTypes: string[];
};

function generateInputProperty(args: GenerateInputPropertyArgs) {
    const {
        inputType,
        sourceFile,
        className,
        classDeclaration,
        propertyTypes,
        projectFilePath,
    } = args;
    const propertyDeclaration = generateClassProperty({
        name: args.name,
        type: propertyTypes.join(' | '),
        classDeclaration,
        isReadOnly: false,
        isRequired: false,
    });
    // TODO: Do import for custom typescript type
    // if (propertyTypes.includes('Decimal')) {
    //     generateImport({sourceFile, name: 'Decimal', moduleSpecifier: 'decimal.js'});
    // }
    // Get field type
    let fieldType = String(inputType.type);
    if (inputType.kind === 'scalar') {
        const importType = toGraphqlImportType({
            kind: inputType.kind,
            type: fieldType,
            isId: false,
        });
        // Override return field type value
        fieldType = importType.name;
        generateImport({
            sourceFile,
            ...importType,
        });
    } else if (['object', 'enum'].includes(inputType.kind) && inputType.type !== className) {
        generateProjectImport({
            name: fieldType,
            type: inputType.kind === 'object' ? 'input' : inputType.kind,
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
