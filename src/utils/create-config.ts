import { unflatten } from 'flat';

import { GeneratorConfiguration } from '../types';

export function createConfig(data: Record<string, string | undefined>): GeneratorConfiguration {
    data = unflatten(data, { delimiter: '_' });
    return {
        outputFilePattern: data.outputFilePattern || `{feature}/{dasherizedName}.{type}.ts`,
        combineScalarFilters: ['true', '1', 'on'].includes(data.combineScalarFilters ?? 'true'),
        atomicNumberOperations: ['true', '1', 'on'].includes(
            data.atomicNumberOperations ?? 'false',
        ),
        languageTypes: ((data.languageTypes || {}) as unknown) as Record<
            string,
            { name: string; specifier: string }
        >,
        graphqlTypes: ((data.graphqlTypes || {}) as unknown) as Record<
            string,
            { name: string; specifier: string }
        >,
    };
}
