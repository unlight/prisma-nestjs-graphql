import assert from 'assert';
import JSON5 from 'json5';
import { remove } from 'lodash';
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
    const {
        getSourceFile,
        models,
        config,
        modelFields,
        fieldSettings,
        eventEmitter,
    } = args;
    const model = models.get(outputType.name);
    assert(model, `Cannot find model by name ${outputType.name}`);
    const sourceFile = getSourceFile({
        name: outputType.name,
        type: 'model',
    });
    const sourceFileStructure = sourceFile.getStructure();
    const imports = remove(
        sourceFileStructure.statements as StatementStructures[],
        s => s.kind === StructureKind.ImportDeclaration,
    ).flatMap(s => {
        return ((s as ImportDeclarationStructure)
            .namedImports as OptionalKind<ImportSpecifierStructure>[]).map(x => [
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
    assert(decorator, 'ObjectType decorator not found');
    decorator.arguments = model.documentation
        ? [JSON5.stringify({ description: model.documentation })]
        : [];

    importDeclarations.add('Field', nestjsGraphql);
    importDeclarations.add('ObjectType', nestjsGraphql);

    for (const field of outputType.fields) {
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
        const customType = config.types[outputTypeName];
        const modelField = modelFields.get(model.name)?.get(field.name);
        const settings = fieldSettings.get(model.name)?.get(field.name);

        const propertyType = customType?.fieldType
            ? [customType.fieldType]
            : getPropertyType({
                  location,
                  type: outputTypeName,
              });

        let graphqlType: string;
        const fieldType = settings?.getFieldType();

        if (fieldType) {
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
        //     graphqlImport,
        //     location,
        // });

        const property = propertyStructure({
            name: field.name,
            isNullable: field.isNullable,
            propertyType,
            isList,
        });

        classStructure.properties?.push(property);

        // Create import for typescript field/property type
        if (customType && customType.fieldType && customType.fieldModule) {
            importDeclarations.add(customType.fieldType, customType.fieldModule);
        }

        if (settings?.hideOutput) {
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
                if (!options.output || options.isFieldType) {
                    continue;
                }
                property.decorators?.push({
                    name: options.name,
                    arguments: options.arguments,
                });
                assert(
                    options.from,
                    "Missed 'from' part in configuration or field setting",
                );
                importDeclarations.create(options);
            }
        }

        eventEmitter.emitSync('ClassProperty', property, { location, isList });
    }

    const hasExportDeclaration = (sourceFileStructure.statements as StatementStructures[]).some(
        structure => {
            return (
                structure.kind === StructureKind.ExportDeclaration &&
                (structure.namedExports as ExportSpecifierStructure[]).some(
                    o => (o.alias || o.name) === model.name,
                )
            );
        },
    );

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
