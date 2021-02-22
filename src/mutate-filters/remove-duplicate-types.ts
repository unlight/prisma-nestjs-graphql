import { InputType } from '../types';
import { generateHash, RemoveDuplicate } from '../utils';

export function removeDuplicateTypes(
    inputTypes: InputType[],
    { removeDuplicateTypes }: { removeDuplicateTypes: RemoveDuplicate },
) {
    const duplicates = new Map<string, Set<string>>();
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
    const toRemove = new Set(
        [...duplicates.values()]
            .filter(s => s.size > 1)
            .map(set => {
                const main = getNameFromAll([...set]);
                return [...set].filter(x => x !== main);
            })
            .flat(),
    );

    return (inputType: InputType) => {
        if (toRemove.has(inputType.name)) {
            return false;
        }
        return inputType;
    };
}

function getNameFromAll(names: string[]) {
    const sorted = names.sort((a, b) => a.length - b.length);
    return sorted[0];
}

function getGroupName(type: InputType) {
    for (const group of groups) {
        const matches = group.match(type.name);
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
        match: (name: string) => /(\w+?)(CreateMany)Input$/.exec(name),
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
];
