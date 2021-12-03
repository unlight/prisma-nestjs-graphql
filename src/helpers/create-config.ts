import { ok } from 'assert';
import filenamify from 'filenamify';
import { unflatten } from 'flat';
import JSON5 from 'json5';
import { Dictionary, merge, trim } from 'lodash';
import outmatch from 'outmatch';

import { ReExport } from '../handlers/re-export';
import { ObjectSetting } from '../types';

type ConfigFieldSetting = Partial<Omit<ObjectSetting, 'name'>>;
type DecorateElement = {
    isMatchField: (s: string) => boolean;
    isMatchType: (s: string) => boolean;
    from: string;
    name: string;
    arguments?: string[];
    namedImport: boolean;
    defaultImport?: string | true;
    namespaceImport?: string;
};

export function createConfig(data: Record<string, unknown>) {
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
                    model: toBoolean(value.model),
                    from: value.from,
                    defaultImport: toBoolean(value.defaultImport)
                        ? true
                        : value.defaultImport,
                    namespaceImport: value.namespaceImport,
                };
                return [name, fieldSetting];
            }),
    );

    const decorate: DecorateElement[] = [];
    const configDecorate: (Record<string, string> | undefined)[] = Object.values(
        (config.decorate as any) || {},
    );

    for (const element of configDecorate) {
        if (!element) continue;
        ok(
            element.from && element.name,
            `Missed 'from' or 'name' part in configuration for decorate`,
        );
        decorate.push({
            isMatchField: outmatch(element.field, { separator: false }),
            isMatchType: outmatch(element.type, { separator: false }),
            from: element.from,
            name: element.name,
            namedImport: toBoolean(element.namedImport),
            defaultImport: toBoolean(element.defaultImport)
                ? true
                : element.defaultImport,
            namespaceImport: element.namespaceImport,
            arguments: element.arguments ? JSON5.parse(element.arguments) : undefined,
        });
    }

    return {
        outputFilePattern,
        tsConfigFilePath: undefined as string | undefined,
        combineScalarFilters: toBoolean(config.combineScalarFilters),
        noAtomicOperations: toBoolean(config.noAtomicOperations),
        reExport: (ReExport[String(config.reExport)] || ReExport.None) as ReExport,
        emitSingle: toBoolean(config.emitSingle),
        emitCompiled: toBoolean(config.emitCompiled),
        $warnings,
        fields,
        purgeOutput: toBoolean(config.purgeOutput),
        useInputType: createUseInputType(config.useInputType as any),
        noTypeId: toBoolean(config.noTypeId),
        requireSingleFieldsInWhereUniqueInput: toBoolean(
            config.requireSingleFieldsInWhereUniqueInput,
        ),
        inputFieldDescription: config.inputFieldDescription as string | undefined,
        decorate,
    };
}

type ConfigInputItem = {
    typeName: string;
    ALL?: string;
    [index: string]: string | undefined;
};

function createUseInputType(data?: Record<string, ConfigInputItem>) {
    if (!data) {
        return [];
    }
    const result: ConfigInputItem[] = [];
    for (const [typeName, useInputs] of Object.entries(data)) {
        const entry: ConfigInputItem = {
            typeName,
            ALL: undefined,
        };
        if (useInputs.ALL) {
            entry.ALL = useInputs.ALL;
            delete useInputs.ALL;
        }

        for (const [propertyName, pattern] of Object.entries(useInputs)) {
            entry[propertyName] = pattern;
        }

        result.push(entry);
    }
    return result;
}

function toBoolean(value: unknown) {
    return ['true', '1', 'on'].includes(String(value));
}
