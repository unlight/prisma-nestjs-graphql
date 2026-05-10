import { BeforeGenerateField } from '../event-names.ts';
import { cloneDeep, keyBy, remove } from '../helpers/utils.ts';
import type {
  EventArguments,
  InputType,
  SchemaArg as SchemaArgument,
  TAwaitEventEmitter,
} from '../types.ts';

/**
 * Subscribes on 'BeforeInputType'
 */
export function combineScalarFilters(eventEmitter: TAwaitEventEmitter) {
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

function beforeGenerateField(
  field: SchemaArgument,
  args: { inputType: InputType },
): void {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { inputType } = args;

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
  const { modelNames, schema } = args;
  const inputTypes = schema.inputObjectTypes.prisma ?? [];
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
    ...enumTypes.map(x => `Enum${x.name}`),
  ];

  const inputTypeByName = keyBy(inputTypes, inputType => inputType.name);

  const replaceBogusFilters = (
    filterName: string,
    filterNameCandidates: string[],
  ) => {
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
      `Nested${type}Filter`,
    ]);

    replaceBogusFilters(`${type}WithAggregatesFilter`, [
      `${type}NullableWithAggregatesFilter`,
      `Nested${type}NullableWithAggregatesFilter`,
      `Nested${type}WithAggregatesFilter`,
    ]);

    replaceBogusFilters(`${type}ListFilter`, [
      `${type}NullableListFilter`,
      `Nested${type}NullableListFilter`,
      `Nested${type}ListFilter`,
    ]);
  }

  for (const modelName of modelNames) {
    replaceBogusFilters(`${modelName}RelationFilter`, [
      `${modelName}NullableRelationFilter`,
    ]);
  }

  for (const modelName of modelNames) {
    replaceBogusFilters(`${modelName}ScalarRelationFilter`, [
      `${modelName}NullableScalarRelationFilter`,
    ]);
  }

  remove(inputTypes, inputType => {
    return isContainBogus(inputType.name);
  });
}
