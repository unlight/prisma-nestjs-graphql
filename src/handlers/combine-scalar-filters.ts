import AwaitEventEmitter from 'await-event-emitter';
import { cloneDeep, keyBy, remove } from 'lodash';

import { BeforeGenerateField } from '../event-names';
import { DMMF, EventArguments, InputType } from '../types';
import { WritableDeep } from 'type-fest';

/**
 * Subscribes on 'BeforeInputType'
 */
export function combineScalarFilters(eventEmitter: AwaitEventEmitter) {
  eventEmitter.on('BeforeInputType', beforeInputType);
  eventEmitter.on(BeforeGenerateField, beforeGenerateField);
  eventEmitter.on('PostBegin', postBegin);
}

function beforeInputType(
  args: EventArguments & {
    inputType: InputType;
    fileType: string;
    classDecoratorName: string;
  },
) {
  const { inputType, removeTypes } = args;

  if (isContainBogus(inputType.name) && isScalarFilter(inputType)) {
    removeTypes.add(inputType.name);
    inputType.name = replaceBogus(inputType.name);
  }
}

function beforeGenerateField(field: WritableDeep<DMMF.SchemaArg>): void {
  for (const fieldInput of field.inputTypes) {
    if (fieldInput.location !== 'inputObjectTypes') {
      continue;
    }
    const fieldInputType = String(fieldInput.type);
    if (isContainBogus(fieldInputType)) {
      fieldInput.type = replaceBogus(fieldInputType);
    }
  }
}

function replaceBogus(name: string) {
  return name.replaceAll(/Nullable|Nested/g, '');
}

function isContainBogus(name: string) {
  return (
    name.startsWith('Nested') ||
    (name.includes('Nullable') && name.endsWith('Filter')) ||
    name.endsWith('NullableFilter')
  );
}

function isScalarFilter(inputType: InputType) {
  if (!inputType.name.endsWith('Filter')) {
    return false;
  }
  let result = false;
  const equals = inputType.fields.find(f => f.name === 'equals');
  if (equals) {
    result = equals.inputTypes.every(x => {
      return ['enumTypes', 'scalar'].includes(x.location);
    });
  }
  return result;
}

function postBegin(args: EventArguments) {
  const { schema, modelNames } = args;
  const inputTypes = schema.inputObjectTypes.prisma;
  const enumTypes = schema.enumTypes.model || [];
  const types = [
    'Bool',
    'Int',
    'String',
    'DateTime',
    'Decimal',
    'Float',
    'Json',
    'Bytes',
    'BigInt',
  ];

  for (const enumType of enumTypes) {
    const { name } = enumType;
    types.push(`Enum${name}`);
  }

  const inputTypeByName = keyBy(inputTypes, inputType => inputType.name);
  const replaceBogusFilters = (filterName: string, filterNameCandidates: string[]) => {
    for (const filterNameCandidate of filterNameCandidates) {
      const candidate = inputTypeByName[filterNameCandidate];
      if (candidate as InputType | undefined) {
        const inputType = cloneDeep({ ...candidate, name: filterName });
        inputTypes.push(inputType);
        inputTypeByName[filterName] = inputType;
        break;
      }
    }
  };

  for (const type of types) {
    // Scalar filters
    replaceBogusFilters(`${type}Filter`, [
      `${type}NullableFilter`,
      `Nested${type}NullableFilter`,
    ]);

    replaceBogusFilters(`${type}WithAggregatesFilter`, [
      `${type}NullableWithAggregatesFilter`,
      `Nested${type}NullableWithAggregatesFilter`,
    ]);

    replaceBogusFilters(`${type}ListFilter`, [
      `${type}NullableListFilter`,
      `Nested${type}NullableListFilter`,
    ]);
  }

  for (const modelName of modelNames) {
    replaceBogusFilters(`${modelName}RelationFilter`, [
      `${modelName}NullableRelationFilter`,
    ]);
  }

  remove(inputTypes, inputType => isContainBogus(inputType.name));
}
