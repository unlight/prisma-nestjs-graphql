import { ClassDeclaration, SourceFile } from 'ts-morph';

import { generateClassProperty } from './generate-class';
import { generateDecorator } from './generate-decorator';
import { generateImport, generateProjectImport } from './generate-import';
import { toGraphqlImportType, toPropertyType } from './utils';

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
    const propertyType = toPropertyType(field);
    let fieldType = field.type;
    if (field.isId || field.kind === 'scalar') {
        fieldType = generateImport({
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
    }
    const propertyDeclaration = generateClassProperty({
        ...field,
        type: propertyType,
        classDeclaration,
    });
    generateDecorator({
        fieldType,
        propertyDeclaration,
        nullable: !field.isRequired,
        defaultValue: field.default,
        description: field.documentation,
    });
}
