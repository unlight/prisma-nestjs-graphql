import { Nullable } from 'simplytyped';
import { ClassDeclaration, SourceFile } from 'ts-morph';

import { generateClassProperty } from './generate-class';
import { generateDecorator } from './generate-decorator';
import { generateImport, generateProjectImport } from './generate-import';
import { GeneratorConfiguration, TypeRecord } from './types';
import { toGraphqlImportType, toPropertyType } from './utils';

export type Field = {
    name: string;
    kind: 'scalar' | 'object' | 'enum';
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
    propertyTypes?: string[];
    config: GeneratorConfiguration;
};

/**
 * Generate property (field) for class.
 */
export function generateProperty(args: GeneratePropertyArgs) {
    const {
        field,
        className,
        classDeclaration,
        sourceFile,
        projectFilePath,
        classType,
        propertyTypes = [toPropertyType(field)],
        config,
    } = args;
    const customType = config.types[field.type] as Nullable<TypeRecord>;
    if (customType) {
        generateImport({
            sourceFile,
            name: customType.fieldType || 'unknown',
            moduleSpecifier: customType.fieldModule,
        });
    }
    const propertyType = customType?.fieldType || propertyTypes.join(' | ') || 'unknown';
    let fieldType = field.type;
    if (field.isId || 'scalar' === field.kind) {
        // Allow override graphql field type
        fieldType = generateImport({
            sourceFile,
            ...toGraphqlImportType({ ...field, customType, isId: Boolean(field.isId) }),
        });
    } else if (['object', 'enum'].includes(field.kind) && field.type !== className) {
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
