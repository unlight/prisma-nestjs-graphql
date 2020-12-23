import { unflatten } from 'flat';
import { merge } from 'lodash';
import { Nullable } from 'simplytyped';

import { GeneratorConfiguration, TypeRecord } from '../types';

export function createConfig(
    data: Record<string, string | undefined>,
): GeneratorConfiguration {
    const config = merge({}, unflatten(data, { delimiter: '_' })) as Record<
        string,
        unknown
    >;
    return {
        outputFilePattern: String(
            config.outputFilePattern || `{feature}/{name}.{type}.ts`,
        ),
        combineScalarFilters: ['true', '1', 'on'].includes(
            (config.combineScalarFilters as Nullable<string>) ?? 'true',
        ),
        atomicNumberOperations: ['true', '1', 'on'].includes(
            (config.atomicNumberOperations as Nullable<string>) ?? 'false',
        ),
        types: merge(config.types || {}, {
            Json: {
                fieldType: 'object',
                graphqlType: 'GraphQLJSON',
                graphqlModule: 'graphql-type-json',
            } as TypeRecord,
        }),
    };
}
