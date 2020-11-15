export { DMMF as PrismaDMMF } from '@prisma/client/runtime';

export type CustomPropertyTypes = Record<string, { name: string; specifier: string }>;

export type GeneratorConfiguration = {
    outputFilePattern: string;
    combineScalarFilters: boolean;
    atomicNumberOperations: boolean;
    customPropertyTypes: Record<string, { name: string; specifier: string }>;
};

export type GeneratorConfigurationOptions = Partial<Record<keyof GeneratorConfiguration, string>>;
