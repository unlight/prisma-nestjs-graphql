import filenamify from 'filenamify';
import { unflatten } from 'flat';
import { merge, trim } from 'lodash';
import { Nullable } from 'simplytyped';

import { ReExport } from '../handlers/re-export';
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

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    let outputFilePattern = filenamify(configOutputFilePattern, {
        replacement: '/',
    })
        .replace(/\.\./g, '/')
        .replace(/\/+/g, '/');
    outputFilePattern = trim(outputFilePattern, '/');

    if (outputFilePattern !== configOutputFilePattern) {
        $warnings.push(
            `Due to invalid filepath 'outputFilePattern' changed to '${outputFilePattern}'`,
        );
    }

    if (config.reExportAll) {
        $warnings.push(`Option 'reExportAll' is deprecated, use 'reExport' instead`);
        if (toBoolean(config.reExportAll)) {
            config.reExport = 'All';
        }
    }

    const types = merge(
        {
            Json: {
                fieldType: 'any',
                graphqlType: 'GraphQLJSON',
                graphqlModule: 'graphql-type-json',
            },
        },
        config.types,
    ) as Record<string, Nullable<TypeRecord>>;

    return {
        outputFilePattern,
        tsConfigFilePath: 'tsconfig.json' as string,
        combineScalarFilters: toBoolean(config.combineScalarFilters),
        noAtomicOperations: toBoolean(config.noAtomicOperations),
        types,
        reExport: (ReExport[String(config.reExport)] || ReExport.None) as ReExport,
        $warnings,
    };
}

function toBoolean(value: unknown) {
    return ['true', '1', 'on'].includes(String(value));
}
