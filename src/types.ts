import { createConfig } from './utils';

export { DMMF as PrismaDMMF } from '@prisma/client/runtime';

export type TypeRecord = Partial<{
    fieldType: string;
    fieldModule: string;
    graphqlType: string;
    graphqlModule: string;
}>;

export type GeneratorConfiguration = ReturnType<typeof createConfig>;
