type FeatureNameArgs = {
    name: string;
    models: string[];
    fallback: string;
};

export function featureName(args: FeatureNameArgs) {
    const { name, models } = args;
    let result = args.fallback;
    for (const keyword of splitKeywords) {
        const [test] = name.split(keyword, 1);
        if (models.includes(test)) {
            result = test;
            return result;
        }
    }
    for (const keyword of endsWithKeywords) {
        const [test] = name.split(keyword).slice(-1);
        if (models.includes(test)) {
            result = test;
            return result;
        }
    }
    for (const [start, end] of middleKeywords) {
        const test = name.slice(start.length).slice(0, -end.length);
        if (models.includes(test)) {
            result = test;
            return result;
        }
    }
    return result;
}

const splitKeywords = [
    'CreateInput',
    'CreateMany',
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
].sort((a, b) => b.length - a.length);

const endsWithKeywords = [
    'Aggregate',
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
];
