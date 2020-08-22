import { DMMF as PrismaDMMF } from '@prisma/client/runtime/dmmf-types';
import { ClassDeclaration, SourceFile } from 'ts-morph';

import { generateClass, generateClassProperty } from './generate-class';
import { generateDecorator } from './generate-decorator';
import { generateGraphqlImport } from './generate-graphql-import';
import { generateProjectImport } from './generate-project-import';
import { toGraphqlImportType, toPropertyType } from './type-utils';

type GenerateModelArgs = {
    model: PrismaDMMF.Model;
    sourceFile: SourceFile;
    projectFilePath(data: { name: string; type: string }): string;
};

/**
 * Generate model (class).
 */
export function generateModel(args: GenerateModelArgs) {
    const { model, sourceFile, projectFilePath } = args;
    const classDeclaration = generateClass({
        decorator: {
            name: 'ObjectType',
            properties: [{ name: 'description', value: model.documentation }],
        },
        sourceFile,
        name: model.name,
    });
    model.fields
        .filter((field) => !field.isGenerated)
        .forEach((field) => {
            generateModelProperty({
                field,
                sourceFile,
                classDeclaration,
                className: model.name,
                projectFilePath,
            });
        });
}

type GenerateModelPropertyArgs = {
    projectFilePath(data: { name: string; type: string }): string;
    classDeclaration: ClassDeclaration;
    sourceFile: SourceFile;
    className: string;
    field: PrismaDMMF.Field;
};

/**
 * Generate property for model class (ObjectType).
 */
function generateModelProperty(args: GenerateModelPropertyArgs) {
    const { field, className, classDeclaration, sourceFile, projectFilePath } = args;
    let propertyType = toPropertyType(field);
    const nullable = !field.isRequired;
    let fieldType = field.type;
    if (field.isId || field.kind === 'scalar') {
        fieldType = generateGraphqlImport({
            sourceFile,
            ...toGraphqlImportType(field),
        });
    } else if ((field.kind === 'object' && field.type !== className) || field.kind === 'enum') {
        generateProjectImport({
            sourceFile,
            projectFilePath,
            name: field.type,
            type: field.kind === 'enum' ? 'enum' : 'model',
        });
    }
    if (field.isList) {
        fieldType = `[${fieldType}]`;
        propertyType = `${propertyType}[]`;
    }
    if (nullable) {
        propertyType = `${propertyType} | null`;
    }
    const propertyDeclaration = generateClassProperty({
        ...field,
        type: propertyType,
        classDeclaration,
    });
    generateGraphqlImport({ name: 'Field', sourceFile, moduleSpecifier: '@nestjs/graphql' });
    generateDecorator({
        fieldType,
        propertyDeclaration,
        nullable,
        defaultValue: field.default,
        description: field.documentation,
    });
}
