import filenamify from 'filenamify';
import { unflatten } from 'flat';
import { merge, trim } from 'lodash';
import { Nullable } from 'simplytyped';

import { TypeRecord } from '../types';

export function createConfig(data: Record<string, string | undefined>) {
    const config = merge({}, unflatten(data, { delimiter: '_' })) as Record<
        string,
        unknown
    >;
    const $warnings: string[] = [];

    const configOutputFilePattern = String(
        config.outputFilePattern || `{model}/{name}.{type}.ts`,
    );

    let outputFilePattern = filenamify(configOutputFilePattern, { replacement: '/' })
        .replace(/\.\./g, '/')
        .replace(/\/+/g, '/');
    outputFilePattern = trim(outputFilePattern, '/');

    if (outputFilePattern !== configOutputFilePattern) {
        $warnings.push(
            `Due to invalid filepath 'outputFilePattern' changed to '${outputFilePattern}'`,
        );
    }

    return {
        outputFilePattern,
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
        $warnings,
    };
}
