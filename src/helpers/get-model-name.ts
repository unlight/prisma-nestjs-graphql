export function getModelName(args: {
    name: string;
    modelNames: string[];
    fallback: string;
}) {
    const { name, modelNames, fallback } = args;
    let result = fallback;
    for (const keyword of splitKeywords) {
        const [test] = name.split(keyword, 1);
        if (modelNames.includes(test)) {
            result = test;
            return result;
        }
    }
    for (const keyword of endsWithKeywords) {
        const [test] = name.split(keyword).slice(-1);
        if (modelNames.includes(test)) {
            result = test;
            return result;
        }
    }
    for (const [start, end] of middleKeywords) {
        const test = name.slice(start.length).slice(0, -end.length);
        if (modelNames.includes(test)) {
            result = test;
            return result;
        }
    }
    return result;
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
].sort((a, b) => b.length - a.length);

const endsWithKeywords = [
    'Aggregate',
    'GroupBy',
    'aggregate',
    'createOne',
    'deleteMany',
    'deleteOne',
    'findMany',
    'findOne',
    'findUnique',
    'updateMany',
    'updateOne',
    'upsertOne',
];

const middleKeywords = [
    ['Aggregate', 'Args'],
    ['CreateOne', 'Args'],
    ['DeleteMany', 'Args'],
    ['DeleteOne', 'Args'],
    ['FindMany', 'Args'],
    ['FindOne', 'Args'],
    ['FindUnique', 'Args'],
    ['UpdateMany', 'Args'],
    ['UpdateOne', 'Args'],
    ['UpsertOne', 'Args'],
    ['GroupBy', 'Args'],
];
