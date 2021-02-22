import { mapKeys } from 'lodash';

import { GeneratorConfiguration, InputType } from '../types';
import { generateHash, RemoveDuplicate } from '../utils';
import { renameInputs } from './rename-inputs';

export function removeDuplicateTypes(
    inputTypes: InputType[],
    config: GeneratorConfiguration,
) {
    const duplicates = new Map<string, Set<string>>();
    const typesByName = mapKeys(inputTypes, 'name');

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

    const replacements: Record<string, string> = {};

    for (const [, nameSet] of duplicates) {
        if (nameSet.size > 1) {
            // eslint-disable-next-line unicorn/no-lonely-if
            if (config.removeDuplicateTypes === RemoveDuplicate.All) {
                const main = getNameFromAll([...nameSet]);
                for (const name of nameSet) {
                    if (main === name) continue;
                    replacements[name] = main;
                }
            }
        }
    }

    // console.log('replacements', replacements);

    // for (const inputType of inputTypes) {
    //     for (const field of inputType.fields) {
    //         for (const input of field.inputTypes) {
    //             const newName = replacements[String(input.type)];
    //             if (newName) {
    //                 console.log(input.type, '->', newName);
    //                 input.type = newName;
    //             }
    //         }
    //     }
    // }

    return (inputType: InputType) => {
        if (replacements[inputType.name]) {
            return false;
        }
        return inputType;
    };
}

function getNameFromAll(names: string[]) {
    const sorted = names.slice().sort((a, b) => a.length - b.length);
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
