import { isEqual, mapKeys } from 'lodash';

import { PrismaDMMF } from '../types';

type InputType = PrismaDMMF.InputType;

export function removeDuplicateTypes(inputTypes: InputType[]) {
    // Create groups
    const inputTypeByName = mapKeys(inputTypes, 'name');
    const replacements: Record<string, string> = {};
    for (const inputType of inputTypes) {
        const group = groupFactories.find(({ match }) => match(inputType));
        if (group) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const model = group.model(group.match(inputType)!);
            const name = group.name(model);
            // Compare fields
            const primaryType = inputTypeByName[name];
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            if (primaryType && isEqual(inputType.fields, primaryType.fields)) {
                replacements[inputType.name] = primaryType.name;
            }
        }
    }

    return (inputType: InputType) => {
        const newName = replacements[inputType.name];
        if (newName && newName !== inputType.name) {
            // TODO: Check do we need rename?
            return false;
        }
        return inputType;
    };
}

const groupFactories = [
    {
        name: (model: string) => `FindMany${model}Args`,
        match: (inputType: InputType) => /^(FindFirst)(\w+?)Args$/.exec(inputType.name),
        model: (matches: RegExpMatchArray) => {
            return matches[2];
        },
    },
    {
        name: (model: string) => `${model}CreateInput`,
        match: (inputType: InputType) =>
            /(\w+?)(CreateMany)Input$/.exec(inputType.name),
        model: (matches: RegExpMatchArray) => {
            return matches[1];
        },
    },
    {
        name: (model: string) => `FindUnique${model}Args`,
        match: (inputType: InputType) => /^(FindOne)(\w+?)Args$/.exec(inputType.name),
        model: (matches: RegExpMatchArray) => {
            return matches[2];
        },
    },
    {
        name: (model: string) => `${model}UpdateInput`,
        match: (inputType: InputType) =>
            /(\w+?)(UncheckedUpdateMany|UpdateManyMutation|UncheckedUpdate|UpdateMany)Input$/.exec(
                inputType.name,
            ),
        model: (matches: RegExpMatchArray) => {
            return matches[1];
        },
    },
];
