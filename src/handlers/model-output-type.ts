import { ok } from 'assert';
import JSON5 from 'json5';
import { castArray, remove, trim } from 'lodash';
import {
    ClassDeclarationStructure,
    CommentStatement,
    ExportSpecifierStructure,
    ImportDeclarationStructure,
    ImportSpecifierStructure,
    OptionalKind,
    StatementStructures,
    StructureKind,
} from 'ts-morph';

import { getGraphqlImport } from '../helpers/get-graphql-import';
import { getOutputTypeName } from '../helpers/get-output-type-name';
import { getPropertyType } from '../helpers/get-property-type';
import { ImportDeclarationMap } from '../helpers/import-declaration-map';
import { propertyStructure } from '../helpers/property-structure';
import { EventArguments, OutputType } from '../types';

const nestjsGraphql = '@nestjs/graphql';

export function modelOutputType(outputType: OutputType, args: EventArguments) {
    const { getSourceFile, models, config, modelFields, fieldSettings, eventEmitter } =
        args;
    const model = models.get(outputType.name);
    ok(model, `Cannot find model by name ${outputType.name}`);
    const sourceFile = getSourceFile({
        name: outputType.name,
        type: 'model',
    });
    const sourceFileStructure = sourceFile.getStructure();
    const imports = remove(
        sourceFileStructure.statements as StatementStructures[],
        s => s.kind === StructureKind.ImportDeclaration,
    ).flatMap(s => {
        return (
            (s as ImportDeclarationStructure)
                .namedImports as OptionalKind<ImportSpecifierStructure>[]
        ).map(x => [
            x.name || x.alias,
            {
                moduleSpecifier: (s as ImportDeclarationStructure).moduleSpecifier,
                namedImports: [{ name: x.name, alias: x.alias }],
            },
        ]);
    }) as Array<[string, OptionalKind<ImportDeclarationStructure>]>;
    const importDeclarations = new ImportDeclarationMap(imports);

    let classStructure = (sourceFileStructure.statements as StatementStructures[]).find(
        (s: StatementStructures) => s.kind === StructureKind.Class,
    ) as ClassDeclarationStructure | undefined;

    if (!classStructure) {
        classStructure = {
            kind: StructureKind.Class,
            isExported: true,
            name: outputType.name,
            decorators: [
                {
                    name: 'ObjectType',
                    arguments: [],
                },
            ],
            properties: [],
        };
        (sourceFileStructure.statements as StatementStructures[]).push(classStructure);
    }

    const decorator = classStructure.decorators?.find(d => d.name === 'ObjectType');
    ok(decorator, 'ObjectType decorator not found');
    const decoratorArgument = decorator.arguments?.[0]
        ? JSON5.parse(decorator.arguments[0])
        : {};
    if (model.documentation) {
        if (!classStructure.leadingTrivia) {
            classStructure.leadingTrivia = `/** ${model.documentation} */\n`;
        }
        decoratorArgument.description = model.documentation;
    } else {
        delete decoratorArgument.description;
    }

    decorator.arguments =
        Object.keys(decoratorArgument).length > 0
            ? [JSON5.stringify(decoratorArgument)]
            : [];

    importDeclarations.add('Field', nestjsGraphql);
    importDeclarations.add('ObjectType', nestjsGraphql);

    for (const field of outputType.fields) {
        // if (model.name === 'Comment') {
        //     console.dir(field);
        // }

        // Do not generate already defined properties for model
        if (classStructure.properties?.some(p => p.name === field.name)) {
            continue;
        }

        let fileType = 'model';
        const { location, isList, type, namespace } = field.outputType;

        let outputTypeName = String(type);
        if (namespace !== 'model') {
            fileType = 'output';
            outputTypeName = getOutputTypeName(outputTypeName);
        }
        const customType = config.types[outputTypeName]; // todo: remove
        const modelField = modelFields.get(model.name)?.get(field.name);
        const settings = fieldSettings.get(model.name)?.get(field.name);
        const fieldType = settings?.getFieldType();
        const propertySettings = settings?.getPropertyType();

        const propertyType = castArray(
            propertySettings?.name ||
                customType?.fieldType?.split('|').map(trim) ||
                getPropertyType({
                    location,
                    type: outputTypeName,
                }),
        );

        // For model we keep only one type
        propertyType.splice(1, propertyType.length);

        if (field.isNullable && !isList && ['enumTypes', 'scalar'].includes(location)) {
            propertyType.push('null');
        }

        let graphqlType: string;

        if (fieldType && fieldType.output) {
            graphqlType = fieldType.name;
            importDeclarations.create({ ...fieldType });
        } else {
            const graphqlImport = getGraphqlImport({
                sourceFile,
                fileType,
                location,
                isId: modelField?.isId,
                typeName: outputTypeName,
                customType,
                getSourceFile,
            });

            graphqlType = graphqlImport.name;

            if (graphqlImport.name !== outputType.name && graphqlImport.specifier) {
                importDeclarations.add(graphqlImport.name, graphqlImport.specifier);
            }
        }

        // console.log({
        //     'field.outputType': field.outputType,
        //     'outputType.name': outputType.name,
        //     'model.name': model.name,
        //     outputTypeName,
        //     'field.name': field.name,
        //     settings,
        //     propertyType,
        //     graphqlType,
        //     location,
        // });

        const property = propertyStructure({
            name: field.name,
            isNullable: field.isNullable,
            hasExclamationToken: true,
            hasQuestionToken: false,
            propertyType,
            isList,
        });

        if (typeof property.leadingTrivia === 'string' && modelField?.documentation) {
            property.leadingTrivia += `/** ${modelField.documentation} */\n`;
        }

        classStructure.properties?.push(property);

        if (propertySettings) {
            importDeclarations.create({ ...propertySettings });
        }

        // Create import for typescript field/property type
        if (customType && customType.fieldType && customType.fieldModule) {
            importDeclarations.add(customType.fieldType, customType.fieldModule);
        }

        if (settings?.shouldHideField({ name: outputType.name, output: true })) {
            importDeclarations.add('HideField', nestjsGraphql);
            property.decorators?.push({ name: 'HideField', arguments: [] });
        } else {
            property.decorators?.push({
                name: 'Field',
                arguments: [
                    `() => ${isList ? `[${graphqlType}]` : graphqlType}`,
                    JSON5.stringify({
                        nullable: Boolean(field.isNullable),
                        defaultValue: ['number', 'string', 'boolean'].includes(
                            typeof modelField?.default,
                        )
                            ? modelField?.default
                            : undefined,
                        description: modelField?.documentation,
                    }),
                ],
            });

            for (const options of settings || []) {
                if (!options.output || options.kind !== 'Decorator') {
                    continue;
                }
                property.decorators?.push({
                    name: options.name,
                    arguments: options.arguments,
                });
                ok(
                    options.from,
                    "Missed 'from' part in configuration or field setting",
                );
                importDeclarations.create(options);
            }
        }

        eventEmitter.emitSync('ClassProperty', property, { location, isList });
    }

    const hasExportDeclaration = (
        sourceFileStructure.statements as StatementStructures[]
    ).some(structure => {
        return (
            structure.kind === StructureKind.ExportDeclaration &&
            (structure.namedExports as ExportSpecifierStructure[]).some(
                o => (o.alias || o.name) === model.name,
            )
        );
    });

    // Check re-export, comment generated class if found
    if (hasExportDeclaration) {
        let commentStatement: CommentStatement | undefined;
        while (
            (commentStatement = sourceFile.getStatementByKind(
                2 /* SingleLineCommentTrivia */,
            ))
        ) {
            commentStatement.remove();
        }

        sourceFile.addStatements([classStructure]);
        const classDeclaration = sourceFile.getClassOrThrow(model.name);

        const commentedText = classDeclaration
            .getText()
            .split('\n')
            .map(x => `// ${x}`);
        classDeclaration.remove();
        sourceFile.addStatements(['\n', ...commentedText]);
    } else {
        (sourceFileStructure.statements as StatementStructures[]).unshift(
            ...importDeclarations.toStatements(),
        );
        sourceFile.set(sourceFileStructure);
    }
}
