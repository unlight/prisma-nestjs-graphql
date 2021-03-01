import { unflatten } from 'flat';
import { merge } from 'lodash';
import { Nullable } from 'simplytyped';

import { TypeRecord } from '../types';

export function createConfig(data: Record<string, string | undefined>) {
    const config = merge({}, unflatten(data, { delimiter: '_' })) as Record<
        string,
        unknown
    >;
    return {
        outputFilePattern: String(
            config.outputFilePattern || `{model}/{name}.{type}.ts`,
        ),
        combineScalarFilters: ['true', '1', 'on'].includes(
            (config.combineScalarFilters as Nullable<string>) ?? 'false',
        ),
        noAtomicOperations: ['true', '1', 'on'].includes(
            (config.noAtomicOperations as Nullable<string>) ?? 'false',
        ),
        types: merge(
            {},
            {
                Json: {
                    fieldType: 'any',
                    graphqlType: 'GraphQLJSON',
                    graphqlModule: 'graphql-type-json',
                },
            },
            config.types,
        ) as Record<string, Nullable<TypeRecord>>,
        reExportAll: ['true', '1', 'on'].includes(
            (config.reExportAll as Nullable<string>) ?? 'false',
        ),
    };
}
