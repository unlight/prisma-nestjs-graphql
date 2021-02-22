import { DMMF } from '@prisma/client/runtime';

import { createConfig } from './utils';

export { DMMF as PrismaDMMF };

export type InputType = DMMF.InputType;

export type TypeRecord = Partial<{
    fieldType: string;
    fieldModule: string;
    graphqlType: string;
    graphqlModule: string;
}>;

export type GeneratorConfiguration = ReturnType<typeof createConfig>;
