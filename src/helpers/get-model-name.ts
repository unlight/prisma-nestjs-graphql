import { first, memoize } from 'lodash';

export function createGetModelName(modelNames: string[]) {
  return memoize(tryGetName);

  function tryGetName(name: string): string | undefined {
    return getModelName({ modelNames, name });
  }
}

function getModelName(args: {
  name: string;
  modelNames: string[];
}): string | undefined {
  const { name, modelNames } = args;
  for (const keyword of splitKeywords) {
    const [test] = name.split(keyword, 1);
    if (modelNames.includes(test)) {
      return test;
    }
  }
  for (const keyword of endsWithKeywords) {
    const [test] = name.split(keyword).slice(-1);
    if (modelNames.includes(test)) {
      return test;
    }
  }
  for (const [start, end] of middleKeywords) {
    let test = name.slice(start.length).slice(0, -end.length);
    if (modelNames.includes(test)) {
      return test;
    }
    test = name.slice(0, -(start + end).length);
    if (modelNames.includes(test)) {
      return test;
    }
  }

  // test for {Model}{UniqueName}CompoundUniqueInput
  if (name.slice(-19) === 'CompoundUniqueInput') {
    const test = name.slice(0, -19);
    const models = modelNames
      .filter(x => test.startsWith(x))
      .sort((a, b) => b.length - a.length);
    return first(models);
  }

  // test for {Model}Count
  if (name.slice(-5) === 'Count') {
    const test = name.slice(0, -5);
    if (modelNames.includes(test)) {
      return test;
    }
  }
  // eslint-disable-next-line consistent-return, unicorn/no-useless-undefined
  return undefined;
}

const splitKeywords = [
  'CreateInput',
  'CreateMany',
  'CreateNested',
  'CreateOneWithout',
  'CreateOrConnect',
  'CreateWithout',
  'DistinctField',
  'Filter',
  'ManyWithout',
  'OrderByInput',
  'RelationFilter',
  'ListRelationFilter',
  'ScalarWhereInput',
  'UpdateInput',
  'UpdateMany',
  'UpdateOneRequiredWithout',
  'UpdateOneWithout',
  'UpdateWith',
  'UpsertWith',
  'UpsertWithout',
  'WhereInput',
  'WhereUniqueInput',
  'AvgAggregate',
  'SumAggregate',
  'MinAggregate',
  'MaxAggregate',
  'CountAggregate',
  'ScalarField',
  'GroupBy',
  'OrderBy',
  'UncheckedUpdate',
  'UncheckedCreate',
  'ScalarWhere',
  'CountOutputType',
  'CountOrderBy',
  'SumOrderBy',
  'MinOrderBy',
  'MaxOrderBy',
  'AvgOrderBy',
].sort((a, b) => b.length - a.length);

const endsWithKeywords = [
  'Aggregate',
  'GroupBy',
  'CreateOne',
  'DeleteMany',
  'DeleteOne',
  'FindMany',
  'FindOne',
  'FindUnique',
  'UpdateMany',
  'UpdateOne',
  'UpsertOne',
];

const middleKeywords = [
  ['Aggregate', 'Args'],
  ['CreateOne', 'Args'],
  ['DeleteMany', 'Args'],
  ['DeleteOne', 'Args'],
  ['FindMany', 'Args'],
  ['FindFirst', 'Args'],
  ['FindOne', 'Args'],
  ['FindUnique', 'Args'],
  ['UpdateMany', 'Args'],
  ['UpdateOne', 'Args'],
  ['UpsertOne', 'Args'],
  ['GroupBy', 'Args'],
  ['OrderBy', 'Args'],
];
