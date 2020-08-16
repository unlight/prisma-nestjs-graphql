import assert from 'assert';
import { ClassDeclaration, Node, ObjectLiteralExpression, SourceFile } from 'ts-morph';

import { generateGraphqlImport } from './generate-graphql-import';
import { generateProjectImport } from './generate-project-import';
import { setObjectProperty } from './set-object-property';
import { toGraphqlImportType } from './to-graphql-import-type';
import { toPropertyType } from './to-property-type';

type GeneratePropertyArgs = {
    projectFilePath(data: { name: string; type: string }): string;
    classDeclaration: ClassDeclaration;
    sourceFile: SourceFile;
    className: string;
    classType: string;
    field: {
        type: string;
        kind: string;
        name: string;
        isList: boolean;
        isRequired?: boolean;
        isId?: boolean;
        default?: any;
        isReadOnly?: boolean;
        documentation?: string;
    };
};

/**
 * Generate property for class.
 */
export function generateProperty(args: GeneratePropertyArgs) {
    const { field, className, classType, classDeclaration, sourceFile, projectFilePath } = args;
    // console.log('field', field);
    let propertyType = toPropertyType(field);
    // console.log('propertyType', propertyType);
    const nullable = !field.isRequired;
    let fieldType = field.type;
    if (field.isId || field.kind === 'scalar') {
        fieldType = generateGraphqlImport({
            name: className,
            importType: toGraphqlImportType(field),
            sourceFile,
        });
    } else if (field.kind === 'object' && field.type !== className) {
        generateProjectImport({
            sourceFile,
            projectFilePath,
            name: field.type,
            type: classType,
        });
    } else if (field.kind === 'enum') {
        generateProjectImport({
            sourceFile,
            projectFilePath,
            name: field.type,
            type: 'enum',
        });
    }
    if (field.isList) {
        fieldType = `[${fieldType}]`;
        propertyType = `${propertyType}[]`;
    }
    if (nullable) {
        propertyType = `${propertyType} | null`;
    }

    let propertyDeclaration = classDeclaration
        .getProperties()
        .find((propertyDeclaration) => propertyDeclaration.getName() === field.name);
    if (!propertyDeclaration) {
        const fieldDecoratorName = generateGraphqlImport({ name: 'Field', sourceFile });
        propertyDeclaration = classDeclaration.addProperty({
            leadingTrivia: '\n',
            name: field.name,
            type: propertyType,
            hasQuestionToken: nullable,
            hasExclamationToken: !nullable,
            isReadonly: field.isReadOnly,
            decorators: [
                {
                    name: fieldDecoratorName,
                    arguments: [`() => ${fieldType}`, '{}'],
                },
            ],
        });
    }
    assert(propertyDeclaration);
    const callExpression = propertyDeclaration.getDecorator('Field')?.getCallExpression();
    assert(callExpression);
    let optionsExpression = callExpression
        .getArguments()
        .find((node) => Node.isObjectLiteralExpression(node)) as
        | ObjectLiteralExpression
        | undefined;

    if (!optionsExpression) {
        [optionsExpression] = callExpression.addArguments(['{}']) as ObjectLiteralExpression[];
    }

    setObjectProperty({
        expression: optionsExpression,
        name: 'nullable',
        value: nullable,
    });

    if (['number', 'string', 'boolean'].includes(typeof field.default)) {
        setObjectProperty({
            expression: optionsExpression,
            name: 'defaultValue',
            value: field.default,
        });
    }

    setObjectProperty({
        expression: optionsExpression,
        name: 'description',
        value: field.documentation,
    });
}
