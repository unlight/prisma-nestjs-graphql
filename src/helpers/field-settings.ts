import JSON5 from 'json5';
import { merge, trim } from 'lodash';

import { GeneratorConfiguration } from '../types';

export type FieldSetting = {
    /**
     * Act as named import or namespaceImport or defaultImport
     */
    name: string;
    isFieldType?: boolean;
    arguments?: string[];
    input: boolean;
    output: boolean;
    from: string;
    defaultImport?: string | true;
    namespaceImport?: string;
};

export class FieldSettings extends Array<FieldSetting> {
    get hideInput() {
        return this.some(s => s.name === 'HideField' && s.input);
    }

    get hideOutput() {
        return this.some(s => s.name === 'HideField' && s.output);
    }

    getFieldType() {
        return this.find(s => s.isFieldType);
    }
}

export function createFieldSettings(args: {
    text: string;
    config: GeneratorConfiguration;
}) {
    let { text } = args;
    const { config } = args;
    const result: FieldSettings = new FieldSettings();
    const matches = text.matchAll(/@(?<name>\w+(\.(\w+))?)\((?<args>.*?)\)/g);
    for (const match of matches) {
        text = text.slice(0, match.index);
        const name = match.groups?.name;
        if (!name) {
            continue;
        }
        const decorator: FieldSetting = {
            name: '',
            arguments: [],
            input: false,
            output: false,
            from: '',
            defaultImport: undefined,
            namespaceImport: undefined,
        };
        if (name === 'TypeGraphQL.omit' || name === 'HideField') {
            Object.assign(decorator, {
                name: 'HideField',
                arguments: [],
                from: '@nestjs/graphql',
                defaultImport: false,
                namespaceImport: false,
            });
            if (match.groups?.args) {
                if (/output:\s*true/.test(match.groups.args)) {
                    decorator.output = true;
                }
                if (/input:\s*true/.test(match.groups.args)) {
                    decorator.input = true;
                }
            } else {
                decorator.output = true;
            }
        } else if (name === 'FieldType' && match.groups?.args) {
            let options = parseArgs(match.groups.args);
            if (typeof options === 'string') {
                options = { name: options };
            }
            const namespace = getNamespace(options.name);
            if (options.name.includes('.')) {
                decorator.namespaceImport = namespace;
            }
            merge(decorator, config.fields[namespace], options, { isFieldType: true });
        } else {
            const namespace = getNamespace(name);
            decorator.namespaceImport = namespace;
            const options = {
                name,
                arguments: (match.groups?.args || '')
                    .split(',')
                    .map(s => trim(s))
                    .filter(Boolean),
            };
            merge(decorator, config.fields[namespace], options);
        }
        result.push(decorator);
    }

    return {
        result,
        documentation: text.split('\\n').filter(Boolean).join('\\n') || undefined,
    };
}

function parseArgs(string: string) {
    try {
        return JSON5.parse(string);
    } catch {
        throw new Error(`Failed to parse: ${string}`);
    }
}

function getNamespace(name: unknown) {
    let result = String(name);
    if (result.includes('.')) {
        [result] = result.split('.');
    }
    return result;
}
