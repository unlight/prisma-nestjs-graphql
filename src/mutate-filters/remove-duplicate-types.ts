import { groupBy } from 'lodash';

// FindFirstDummyArgs FindManyDummyArgs*
// DummyUpdateInput* DummyUpdateManyInput DummyUpdateManyMutationInput DummyUncheckedUpdateInput
// DummyCreateInput* DummyCreateManyInput
// FindUniqueDummyArgs* FindOneDummyArgs
import { PrismaDMMF } from '../types';

type InputType = PrismaDMMF.InputType;

export function removeDuplicateTypes(inputTypes: InputType[]) {
    // Create groups
    const groups = groupBy(inputTypes, (inputType: InputType) => {
        const group = groupFactories.find(({ match }) => match(inputType));
        if (group) {
            const model = group.model(group.match(inputType));
        }
    });
    return (inputType: InputType) => {
        // console.log('inputType', inputType);
        return inputType;
    };
}

const groupFactories = [
    {
        name: 'findManyArgs',
        match: (inputType: InputType) =>
            inputType.name.match(/^(FindFirst|FindMany)(\w+)Args$/),
        model: (matches: RegExpMatchArray) => {
            return matches[2];
        },
        // main: (inputTypes: InputType[]) =>
        //     inputTypes.find(x => /^FindMany\w+Args$/.test(x.name)),
    },
    // {
    //     name: 'updateInput',
    //     match: (inputType: InputType) =>
    //         /\w+(Update|UpdateMany|UpdateManyMutation|Unchecked|UncheckedUpdate)Input$/.test(
    //             inputType.name,
    //         ),
    //     main: (inputTypes: InputType[]) => inputTypes[0],
    // },
    // { name: 'undefined', match: () => true },
];
