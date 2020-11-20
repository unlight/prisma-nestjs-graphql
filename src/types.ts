export { DMMF as PrismaDMMF } from '@prisma/client/runtime';

export type GeneratorConfiguration = {
    outputFilePattern: string;
    combineScalarFilters: boolean;
    atomicNumberOperations: boolean;
    languageTypes: Record<string, { name: string; specifier: string }>;
    graphqlTypes: Record<string, { name: string; specifier: string }>;
};
