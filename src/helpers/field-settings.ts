import { trim } from 'lodash';

export type FieldSettings = {
    hideOutput: boolean;
    decorators: {
        name: string;
        arguments: string[] | undefined;
    }[];
};

export function parseFieldSettings(
    text: string,
): FieldSettings & { documentation: string | undefined } {
    let hideOutput = false;
    const decorators: FieldSettings['decorators'] = [];
    const matches = text.matchAll(/@(?<name>\w+(\.(\w+))?)\((?<args>.*?)\)/g);
    for (const match of matches) {
        text = text.slice(0, match.index);
        const name = match.groups?.name;
        if (!name) {
            continue;
        }
        if (
            name === 'TypeGraphQL.omit' &&
            match.groups?.args &&
            /output:\s*true/.test(match.groups.args)
        ) {
            hideOutput = true;
            continue;
        }
        if (name === 'HideField') {
            hideOutput = true;
            continue;
        }

        const decorator = {
            name,
            arguments: (match.groups?.args || '')
                .split(',')
                .map(s => trim(s))
                .filter(Boolean),
        };
        decorators.push(decorator);
    }

    const documentation = text.split('\\n').filter(Boolean).join('\\n') || undefined;

    return {
        documentation,
        hideOutput,
        decorators,
    };
}
