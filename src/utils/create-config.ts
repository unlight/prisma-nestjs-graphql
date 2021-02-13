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
                fieldType: 'Record<string, any>',
                graphqlType: 'GraphQLJSON',
                graphqlModule: 'graphql-type-json',
            },
        }) as Record<string, TypeRecord>,
        reExportAll: ['true', '1', 'on'].includes(
            (config.reExportAll as Nullable<string>) ?? 'false',
        ),
        renameZooTypes: ['true', '1', 'on'].includes(
            (config.renameZooTypes as Nullable<string>) ?? 'true',
        ),
    };
}
