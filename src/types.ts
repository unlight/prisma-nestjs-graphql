export { DMMF as PrismaDMMF } from '@prisma/client/runtime';

export type TypeRecord = Partial<{
    fieldType: string;
    fieldModule: string;
    graphqlType: string;
    graphqlModule: string;
}>;

export type GeneratorConfiguration = {
    outputFilePattern: string;
    combineScalarFilters: boolean;
    atomicNumberOperations: boolean;
    types: Record<string, TypeRecord>;
    reExportAll: boolean;
    renameZooTypes: boolean;
};
