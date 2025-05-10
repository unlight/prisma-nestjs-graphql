import { ok } from 'assert';
import JSON5 from 'json5';
import { castArray, last } from 'lodash';
import pupa from 'pupa';
import { ClassDeclarationStructure, StructureKind } from 'ts-morph';

import { BeforeGenerateField } from '../event-names';
import { getGraphqlImport } from '../helpers/get-graphql-import';
import { getGraphqlInputType } from '../helpers/get-graphql-input-type';
import { getPropertyType } from '../helpers/get-property-type';
import { getWhereUniqueAtLeastKeys } from '../helpers/get-where-unique-at-least-keys';
import { ImportDeclarationMap } from '../helpers/import-declaration-map';
import { isWhereUniqueInputType } from '../helpers/is-where-unique-input-type';
import { propertyStructure } from '../helpers/property-structure';
import { EventArguments, InputType } from '../types';

export function inputType(
  args: EventArguments & {
    inputType: InputType;
    fileType: string;
    classDecoratorName: string;
  },
) {
  const {
    classDecoratorName,
    classTransformerTypeModels,
    config,
    eventEmitter,
    fieldSettings,
    fileType,
    getModelName,
    getSourceFile,
    inputType,
    models,
    removeTypes,
    typeNames,
  } = args;

  typeNames.add(inputType.name);

  const importDeclarations = new ImportDeclarationMap();
  const sourceFile = getSourceFile({
    name: inputType.name,
    type: fileType,
  });
  const classStructure: ClassDeclarationStructure = {
    decorators: [
      {
        arguments: [],
        name: classDecoratorName,
      },
    ],
    isExported: true,
    kind: StructureKind.Class,
    name: inputType.name,
    properties: [],
  };
  const modelName = getModelName(inputType.name) || '';
  const model = models.get(modelName);
  const modelFieldSettings = model && fieldSettings.get(model.name);
  const moduleSpecifier = '@nestjs/graphql';

  importDeclarations
    .set('Field', {
      moduleSpecifier,
      namedImports: [{ name: 'Field' }],
    })
    .set(classDecoratorName, {
      moduleSpecifier,
      namedImports: [{ name: classDecoratorName }],
    });

  const useInputType = config.useInputType.find(x =>
    inputType.name.includes(x.typeName),
  );
  const isWhereUnique = isWhereUniqueInputType(inputType.name);

  for (const field of inputType.fields) {
    field.inputTypes = field.inputTypes.filter(t => !removeTypes.has(String(t.type)));

    eventEmitter.emitSync(BeforeGenerateField, field, args);

    const { inputTypes, isRequired, name } = field;

    if (inputTypes.length === 0) {
      // No types
      continue;
    }

    const usePattern = useInputType?.ALL || useInputType?.[name];
    const graphqlInputType = getGraphqlInputType(inputTypes, usePattern);
    const { isList, location, type } = graphqlInputType;
    const typeName = String(type);
    const settings = modelFieldSettings?.get(name);
    const propertySettings = settings?.getPropertyType({
      input: true,
      name: inputType.name,
    });
    const modelField = model?.fields.find(f => f.name === name);
    const isCustomsApplicable = typeName === modelField?.type;
    const atLeastKeys = model && getWhereUniqueAtLeastKeys(model);
    const whereUniqueInputType =
      isWhereUniqueInputType(typeName) &&
      atLeastKeys &&
      `Prisma.AtLeast<${typeName}, ${atLeastKeys
        .map(name => `'${name}'`)
        .join(' | ')}>`;

    const propertyType = castArray(
      propertySettings?.name ||
        whereUniqueInputType ||
        getPropertyType({
          location,
          type: typeName,
        }),
    );

    const hasExclamationToken = Boolean(
      isWhereUnique &&
        config.unsafeCompatibleWhereUniqueInput &&
        atLeastKeys?.includes(name),
    );
    const property = propertyStructure({
      hasExclamationToken: hasExclamationToken || undefined,
      hasQuestionToken: hasExclamationToken ? false : undefined,
      isList,
      isNullable: !isRequired,
      name,
      propertyType,
    });

    classStructure.properties!.push(property);

    if (propertySettings) {
      importDeclarations.create({ ...propertySettings });
    } else if (propertyType.includes('Decimal')) {
      // TODO: Deprecated and should be removed
      importDeclarations.add('Decimal', `${config.prismaClientImport}/runtime/library`);
    } else if (propertyType.some(p => p.startsWith('Prisma.'))) {
      importDeclarations.add('Prisma', config.prismaClientImport);
    }

    // Get graphql type
    let graphqlType: string;
    const shouldHideField =
      settings?.shouldHideField({
        input: true,
        name: inputType.name,
      }) ||
      config.decorate.some(
        d =>
          d.name === 'HideField' &&
          d.from === moduleSpecifier &&
          d.isMatchField(name) &&
          d.isMatchType(inputType.name),
      );

    const fieldType = settings?.getFieldType({
      input: true,
      name: inputType.name,
    });

    if (fieldType && isCustomsApplicable && !shouldHideField) {
      graphqlType = fieldType.name;
      importDeclarations.create({ ...fieldType });
    } else {
      // Import property type class
      const graphqlImport = getGraphqlImport({
        config,
        getSourceFile,
        location,
        sourceFile,
        typeName,
      });

      graphqlType = graphqlImport.name;
      let referenceName = propertyType[0];
      if (location === 'enumTypes') {
        referenceName = last(referenceName.split(' ')) as string;
      }

      if (
        graphqlImport.specifier &&
        !importDeclarations.has(graphqlImport.name) &&
        graphqlImport.name !== inputType.name
        // ((graphqlImport.name !== inputType.name && !shouldHideField) ||
        //     (shouldHideField && referenceName === graphqlImport.name))
      ) {
        importDeclarations.set(graphqlImport.name, {
          moduleSpecifier: graphqlImport.specifier,
          namedImports: [{ name: graphqlImport.name }],
        });
      }
    }

    ok(property.decorators, 'property.decorators is undefined');

    if (shouldHideField) {
      importDeclarations.add('HideField', moduleSpecifier);
      property.decorators.push({ arguments: [], name: 'HideField' });
    } else {
      // Generate `@Field()` decorator
      property.decorators.push({
        arguments: [
          isList ? `() => [${graphqlType}]` : `() => ${graphqlType}`,
          JSON5.stringify({
            ...settings?.fieldArguments(),
            nullable: !isRequired,
          }),
        ],
        name: 'Field',
      });

      if (graphqlType === 'GraphQLDecimal') {
        importDeclarations.add('transformToDecimal', 'prisma-graphql-type-decimal');
        importDeclarations.add('Transform', 'class-transformer');
        importDeclarations.add('Type', 'class-transformer');

        property.decorators.push(
          {
            arguments: ['() => Object'],
            name: 'Type',
          },
          {
            arguments: ['transformToDecimal'],
            name: 'Transform',
          },
        );
      } else if (
        location === 'inputObjectTypes' &&
        (modelField?.type === 'Decimal' ||
          [
            'connect',
            'connectOrCreate',
            'create',
            'createMany',
            'data',
            'delete',
            'deleteMany',
            'disconnect',
            'set',
            'update',
            'updateMany',
            'upsert',
            'where',
          ].includes(name) ||
          classTransformerTypeModels.has(getModelName(graphqlType) || '') ||
          (modelField?.kind === 'object' &&
            models.get(modelField.type) &&
            models
              .get(modelField.type)
              ?.fields.some(
                field =>
                  field.kind === 'object' && classTransformerTypeModels.has(field.type),
              )))
      ) {
        importDeclarations.add('Type', 'class-transformer');
        property.decorators.push({ arguments: [`() => ${graphqlType}`], name: 'Type' });
      }

      if (isCustomsApplicable) {
        for (const options of settings || []) {
          if (
            (options.kind === 'Decorator' && options.input && options.match?.(name)) ??
            true
          ) {
            property.decorators.push({
              arguments: options.arguments as string[],
              name: options.name,
            });
            ok(options.from, "Missed 'from' part in configuration or field setting");
            importDeclarations.create(options);
          }
        }
      }

      for (const decorate of config.decorate) {
        if (decorate.isMatchField(name) && decorate.isMatchType(inputType.name)) {
          property.decorators.push({
            arguments: decorate.arguments?.map(x => pupa(x, { propertyType })),
            name: decorate.name,
          });
          importDeclarations.create(decorate);
        }
      }
    }

    eventEmitter.emitSync('ClassProperty', property, {
      isList,
      location,
      propertyType,
    });
  }

  sourceFile.set({
    statements: [...importDeclarations.toStatements(), classStructure],
  });
}
