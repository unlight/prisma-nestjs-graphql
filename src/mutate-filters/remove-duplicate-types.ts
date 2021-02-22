import { GeneratorConfiguration, InputType } from '../types';
import { generateHash, RemoveDuplicate } from '../utils';

export function removeDuplicateTypes(
    inputTypes: InputType[],
    config: GeneratorConfiguration,
) {
    let duplicates = new Map<string, Set<string>>();

    for (const inputType of inputTypes) {
        const attributes = inputType.fields.map(x => ({
            name: x.name,
            comment: x.comment,
            isNullable: x.isNullable,
            isRequired: x.isRequired,
            inputTypes: x.inputTypes,
        }));
        const hash = generateHash(attributes);
        duplicates.set(hash, (duplicates.get(hash) ?? new Set()).add(inputType.name));
    }

    for (const [key, value] of duplicates.entries()) {
        if (value.size === 1) duplicates.delete(key);
    }

    const replacements: Record<string, string> = {};

    for (const [, nameSet] of duplicates) {
        if (config.removeDuplicateTypes === RemoveDuplicate.All) {
            const main = getShortest([...nameSet]);
            for (const name of nameSet) {
                if (main === name) continue;
                replacements[name] = main;
            }
        } else if (config.removeDuplicateTypes === RemoveDuplicate.Group) {
            const groups = new Map<string, Set<string>>();
            for (const name of nameSet) {
                const groupName = getGroupName(name);
                if (groupName) {
                    groups.set(
                        groupName,
                        (groups.get(groupName) ?? new Set()).add(name),
                    );
                }
            }
            for (const nameSet of groups.values()) {
                if (nameSet.size <= 1) {
                    continue;
                }
                const main = getShortest([...nameSet]);
                for (const name of nameSet) {
                    if (main === name) continue;
                    replacements[name] = main;
                }
            }
        }
    }

    return (inputType: InputType) => {
        if (replacements[inputType.name]) {
            return false;
        }
        return inputType;
    };
}

function getShortest(names: string[]) {
    const items = names.slice().sort((a, b) => a.length - b.length);
    return items[0];
}

function getGroupName(typeName: string) {
    for (const group of groups) {
        const matches = group.match(typeName);
        if (matches) {
            const model = group.model(matches);
            if (model) {
                return group.name(model);
            }
        }
    }
}

const groups = [
    {
        name: (model: string) => `FindMany${model}Args`,
        match: (name: string) => /^(FindFirst|FindMany)(\w+?)Args$/.exec(name),
        model: (matches: RegExpMatchArray) => {
            return matches[2];
        },
    },
    {
        name: (model: string) => `${model}CreateInput`,
        match: (name: string) =>
            /(\w+?)((Unchecked)?CreateWithout|UncheckedCreate|CreateMany).*Input$/.exec(
                name,
            ),
        model: (matches: RegExpMatchArray) => {
            return matches[1];
        },
    },
    {
        name: (model: string) => `FindUnique${model}Args`,
        match: (name: string) => /^(FindOne)(\w+?)Args$/.exec(name),
        model: (matches: RegExpMatchArray) => {
            return matches[2];
        },
    },
    {
        name: (model: string) => `${model}UpdateInput`,
        match: (name: string) =>
            /(\w+?)(UncheckedUpdateMany|UpdateManyMutation|UncheckedUpdate|UpdateMany|Update).*Input$/.exec(
                name,
            ),
        model: (matches: RegExpMatchArray) => {
            return matches[1];
        },
    },
    {
        name: (model: string) => `${model}UniqueInput`,
        match: (name: string) => /(\w+?)(WhereUniqueInput)$/.exec(name),
        model: (matches: RegExpMatchArray) => {
            return matches[1];
        },
    },
];
