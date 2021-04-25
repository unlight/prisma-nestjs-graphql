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
    namespace?: string;
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
    const { config, text } = args;
    const result: FieldSettings = new FieldSettings();
    const textLines = text.split('\n');
    const documentationLines: string[] = [];
    for (const line of textLines) {
        const match = /^@(?<name>\w+(\.(\w+))?)\((?<args>.*?)\)/.exec(line);
        if (!match) {
            documentationLines.push(line);
            continue;
        }
        const name = match.groups?.name;
        const decorator: FieldSetting = {
            name: '',
            arguments: [],
            input: false,
            output: false,
            from: '',
        };
        if (name === 'TypeGraphQL.omit' || name === 'HideField') {
            Object.assign(decorator, hideFieldDecorator(match));
        } else if (name === 'FieldType' && match.groups?.args) {
            let options = parseArgs(match.groups.args);
            if (typeof options === 'string') {
                options = { name: options };
            }
            const namespace = getNamespace(options.name);
            if ((options as { name: string }).name.includes('.')) {
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
        documentation: documentationLines.filter(Boolean).join('\\n') || undefined,
    };
}

function hideFieldDecorator(match: RegExpExecArray) {
    const result: Partial<FieldSetting> = {
        name: 'HideField',
        arguments: [],
        from: '@nestjs/graphql',
        defaultImport: undefined,
        namespaceImport: undefined,
    };
    if (match.groups?.args) {
        if (/output:\s*true/.test(match.groups.args)) {
            result.output = true;
        }
        if (/input:\s*true/.test(match.groups.args)) {
            result.input = true;
        }
    } else {
        result.output = true;
    }
    return result;
}

function parseArgs(string: string): Record<string, unknown> | string {
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
