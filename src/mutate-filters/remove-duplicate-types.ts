import { isEqual } from 'lodash';

import { InputType } from '../types';
import { RemoveDuplicate, generateHash } from '../utils';

export function removeDuplicateTypes(
    inputTypes: InputType[],
    { removeDuplicate }: { removeDuplicate: RemoveDuplicate },
) {
    const duplicates = new Map<string, Set<string>>();
    for (const inputType of inputTypes) {
        const hash = generateHash(inputType.fields);
        duplicates.set(hash, (duplicates.get(hash) ?? new Set()).add(inputType.name));
        // for (const otherType of inputTypes) {
        //     if (otherType.name === inputType.name) {
        //         continue;
        //     }
        //     if (isEqual(inputType.fields, otherType.fields)) {
        //         duplicates.set(hash, otherType.name)
        //         if (removeDuplicate === RemoveDuplicate.All) {
        //             duplicates[otherType.name] = inputType.name;
        //         } else if (removeDuplicate === RemoveDuplicate.Group) {
        //             const groupName = getGroupName(otherType);
        //             if (groupName) {
        //                 duplicates[otherType.name] = groupName;
        //             }
        //         }
        //     }
        // }
    }
    const toRemove = [...duplicates.values()]
        .filter(s => s.size > 1)
        .map(set => {
            const main = getNameFromAll([...set]);
            return [...set].filter(x => x !== main);
        })
        .flat();

    console.log('toRemove', toRemove);
    // console.log('duplicates', duplicates);

    return (inputType: InputType) => {
        if (toRemove.includes(inputType.name)) {
            return false;
        }
        return inputType;
    };

    // // Create groups
    // const inputTypeByName = mapKeys(inputTypes, 'name');
    // const replacements: Record<string, string> = {};
    // for (const inputType of inputTypes) {
    //     const group = groupFactories.find(({ match }) => match(inputType));
    //     if (group) {
    //         // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    //         const model = group.model(group.match(inputType)!);
    //         const name = group.name(model);
    //         // Compare fields
    //         const primaryType = inputTypeByName[name];
    //         // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    //         if (primaryType && isEqual(inputType.fields, primaryType.fields)) {
    //             replacements[inputType.name] = primaryType.name;
    //         }
    //     }
    // }
    // console.log('replacements', replacements);

    // return (inputType: InputType) => {
    //     const newName = replacements[inputType.name];
    //     if (newName && newName !== inputType.name) {
    //         // TODO: Check do we need rename?
    //         return false;
    //     }
    //     return inputType;
    // };
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
