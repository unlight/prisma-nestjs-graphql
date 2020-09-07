import { ClassDeclaration, SourceFile } from 'ts-morph';

import { generateClassProperty } from './generate-class';
import { generateDecorator } from './generate-decorator';
import { generateGraphqlImport } from './generate-graphql-import';
import { generateProjectImport } from './generate-project-import';
import { toGraphqlImportType, toPropertyType } from './type-utils';

export type Field = {
    name: string;
    kind: string;
    type: string;
    isList: boolean;
    isRequired: boolean;
    isId?: boolean;
    default?: unknown;
    documentation?: string;
};

export type Model = {
    name: string;
    fields: Field[];
};

type GeneratePropertyArgs = {
    projectFilePath(data: { name: string; type: string }): string;
    classDeclaration: ClassDeclaration;
    sourceFile: SourceFile;
    className: string;
    field: Field;
    classType: string;
};

/**
 * Generate property for class.
 */
export function generateProperty(args: GeneratePropertyArgs) {
    const { field, className, classDeclaration, sourceFile, projectFilePath, classType } = args;
    let propertyType = toPropertyType(field);
    const nullable = !field.isRequired;
    let fieldType = field.type;
    if (field.isId || field.kind === 'scalar') {
        fieldType = generateGraphqlImport({
            sourceFile,
            ...toGraphqlImportType({ ...field, isId: Boolean(field.isId) }),
        });
    } else if ((field.kind === 'object' && field.type !== className) || field.kind === 'enum') {
        generateProjectImport({
            sourceFile,
            projectFilePath,
            name: field.type,
            type: field.kind === 'enum' ? 'enum' : classType,
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
    generateDecorator({
        fieldType,
        propertyDeclaration,
        nullable,
        defaultValue: field.default,
        description: field.documentation,
    });
}
