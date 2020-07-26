type ToGraphqlImportTypeArgs = {
    isId?: boolean;
    type: string;
};

export function toGraphqlImportType(args: ToGraphqlImportTypeArgs) {
    const { isId, type } = args;
    let name = type;
    if (isId) {
        return { name: 'ID', moduleSpecifier: '@nestjs/graphql' };
    }
    if (name === 'Int' || name === 'Float') {
        return { name, moduleSpecifier: '@nestjs/graphql' };
    }
    if (name === 'DateTime') {
        name = 'String';
    }
    return { name, moduleSpecifier: undefined };
}
