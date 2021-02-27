import { mapKeys } from 'lodash';
import { CommentStatement } from 'ts-morph';

import { generateClass } from '../helpers/generate-class';
import { generateDecorator } from '../helpers/generate-decorator';
import { generateImport } from '../helpers/generate-import';
import { generateProperty } from '../helpers/generate-property';
import { getGraphqlImport } from '../helpers/get-graphql-import';
import { getGraphqlType } from '../helpers/get-graphql-type';
import { getOutputTypeName } from '../helpers/get-output-type-name';
import { getPropertyType } from '../helpers/get-property-type';
import { DMMF, EventArguments, OutputType } from '../types';

export function outputType(outputType: OutputType, args: EventArguments) {
    const { getSourceFile, models, config, eventEmitter, queryOutputTypes } = args;

    if (['Query', 'Mutation'].includes(outputType.name)) {
        queryOutputTypes.push(outputType);
        return;
    }

    outputType.name = getOutputTypeName(outputType.name);

    if (outputType.name.endsWith('Aggregate')) {
        eventEmitter.emitSync('aggregateOutput', { ...args, outputType });
    }

    const model = models.get(outputType.name);
    const modelFields = mapKeys(model?.fields, x => x.name) as Record<
        string,
        DMMF.Field | undefined
    >;
    const fileType = model ? 'model' : 'output';

    const sourceFile = getSourceFile({
        name: outputType.name,
        type: fileType,
    });

    const classDeclaration = generateClass({
        decorator: {
            name: 'ObjectType',
            properties: [
                {
                    name: 'description',
                    value: model?.documentation,
                },
            ],
        },
        sourceFile,
        name: outputType.name,
    });

    generateImport({
        sourceFile,
        name: 'Field',
        moduleSpecifier: '@nestjs/graphql',
    });

    for (const field of outputType.fields) {
        // Do not generate already defined properties for model
        if (model && classDeclaration.getProperty(field.name)) {
            continue;
        }

        const { location, isList } = field.outputType;
        const outputTypeName = getOutputTypeName(String(field.outputType.type));
        const modelField = modelFields[field.name];
        const customType = config.types[outputTypeName];

        if (location === 'outputObjectTypes') {
            field.outputType.type = outputTypeName;
        }

        const propertyType = customType?.fieldType
            ? [customType.fieldType]
            : getPropertyType({
                  location,
                  type: outputTypeName,
              });

        const propertyDeclaration = generateProperty({
            classDeclaration,
            name: field.name,
            isNullable: field.isNullable,
            propertyType,
            isList,
        });

        const graphqlType =
            customType?.graphqlType ??
            getGraphqlType({
                location,
                type: outputTypeName,
                isId: modelField?.isId,
            });

        const graphqlImport = getGraphqlImport({
            sourceFile,
            fileType,
            location,
            isId: modelField?.isId,
            name: graphqlType,
            customType,
            getSourceFile,
        });

        if (graphqlImport.name !== outputType.name && graphqlImport.specifier) {
            generateImport({
                sourceFile,
                name: graphqlImport.name,
                moduleSpecifier: graphqlImport.specifier,
            });
        }

        // Create import for typescript field/property type
        if (customType && customType.fieldModule && customType.fieldType) {
            generateImport({
                sourceFile,
                name: customType.fieldType,
                moduleSpecifier: customType.fieldModule,
            });
        }

        generateDecorator({
            propertyDeclaration,
            graphqlType,
            isList,
            isNullable: field.isNullable,
            defaultValue: modelField?.default,
            description: modelField?.documentation,
        });
    }

    // Check reexport, comment generated class if found
    if (model) {
        const exportDeclaration = sourceFile.getExportDeclaration(d => {
            return d
                .getNamedExports()
                .some(x => x.getNameNode().getText() === model.name);
        });
        if (exportDeclaration) {
            let commentStatement: CommentStatement | undefined;
            while (
                (commentStatement = sourceFile.getStatementByKind(
                    2 /* SingleLineCommentTrivia */,
                ))
            ) {
                commentStatement.remove();
            }
            const commentedText = classDeclaration
                .getText()
                .split('\n')
                .map(x => `// ${x}`);
            classDeclaration.remove();
            sourceFile.addStatements(['\n', ...commentedText]);
        }
    }
}
