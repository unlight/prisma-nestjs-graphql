type ToGraphqlImportTypeArgs = {
    isId: boolean;
    type: string;
    kind: string;
};

export function toGraphqlImportType(args: ToGraphqlImportTypeArgs) {
    const { isId, type, kind } = args;
    // console.log('type', type, 'kind', kind);
    let name = type;
    if (isId) {
        return { name: 'ID', moduleSpecifier: '@nestjs/graphql' };
    }
    if (name === 'Int' || name === 'Float') {
        return { name, moduleSpecifier: '@nestjs/graphql' };
    }
    if (kind === 'scalar' && type === 'Json') {
        return { name: 'GraphQLJSON', moduleSpecifier: 'graphql-type-json' };
    }
    if (name === 'DateTime') {
        name = 'String';
    }
    return { name, moduleSpecifier: undefined };
}
