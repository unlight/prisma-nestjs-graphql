import filenamify from 'filenamify';
import { unflatten } from 'flat';
import { Dictionary, merge, trim } from 'lodash';
import { Nullable } from 'simplytyped';

import { ReExport } from '../handlers/re-export';
import { FieldSetting, TypeRecord } from '../types';

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

    const types = merge({}, config.types) as Record<string, Nullable<TypeRecord>>;

    type ConfigFieldSetting = Partial<Omit<FieldSetting, 'name'>>;
    const fields: Record<string, ConfigFieldSetting | undefined> = Object.fromEntries(
        Object.entries<Dictionary<string | undefined>>(
            (config.fields ?? {}) as Record<string, Dictionary<string | undefined>>,
        )
            .filter(({ 1: value }) => typeof value === 'object')
            .map(([name, value]) => {
                const fieldSetting: ConfigFieldSetting = {
                    arguments: [],
                    output: toBoolean(value.output),
                    input: toBoolean(value.input),
                    from: value.from,
                    defaultImport: toBoolean(value.defaultImport)
                        ? true
                        : value.defaultImport,
                    namespaceImport: value.namespaceImport,
                };
                return [name, fieldSetting];
            }),
    );

    if (Object.keys(types).length > 0) {
        $warnings.push(
            'Configuration throu `types_*` is deprecated, use @FieldType/@PropertyType https://github.com/unlight/prisma-nestjs-graphql#field-settings',
        );
    }

    return {
        outputFilePattern,
        tsConfigFilePath: undefined as string | undefined,
        combineScalarFilters: toBoolean(config.combineScalarFilters),
        noAtomicOperations: toBoolean(config.noAtomicOperations),
        /**
         * @deprecated
         * Use FieldType() instead
         */
        types,
        reExport: (ReExport[String(config.reExport)] || ReExport.None) as ReExport,
        emitSingle: toBoolean(config.emitSingle),
        emitCompiled: toBoolean(config.emitCompiled),
        $warnings,
        fields,
        purgeOutput: toBoolean(config.purgeOutput),
        useInputType: createUseInputType(config.useInputType),
    };
}

function createUseInputType(data: any) {
    if (!data) {
        return [];
    }
    const result: {
        typeName: string;
        ALL: string | undefined;
        properties: Record<string, string | undefined>;
    }[] = [];
    for (const [typeName, useInputs] of Object.entries<any>(data)) {
        const entry = {
            typeName,
            ALL: undefined,
            properties: {},
        };
        if (useInputs['ALL']) {
            entry.ALL = useInputs['ALL'];
            delete useInputs['ALL'];
        }
        entry.properties = useInputs;
        result.push(entry);
    }
    return result;
}

function toBoolean(value: unknown) {
    return ['true', '1', 'on'].includes(String(value));
}
