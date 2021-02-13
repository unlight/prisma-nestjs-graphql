import { groupBy } from 'lodash';

// FindFirstDummyArgs FindManyDummyArgs*
// DummyUpdateInput* DummyUpdateManyInput DummyUpdateManyMutationInput DummyUncheckedUpdateInput
// DummyCreateInput* DummyCreateManyInput
// FindUniqueDummyArgs* FindOneDummyArgs
import { PrismaDMMF } from '../types';

type InputType = PrismaDMMF.InputType;

export function removeDuplicateTypes(inputTypes: InputType[]) {
    // Create groups
    const groups = groupBy(
        inputTypes,
        (inputType: InputType) =>
            groupFactories.find(({ match }) => match(inputType))?.name,
    );
    console.log('groups', groups);
    return (inputType: InputType) => {
        // console.log('inputType', inputType);
        return inputType;
    };
}

const groupFactories = [
    {
        name: 'findManyArgs',
        match: (inputType: InputType) =>
            /^(FindFirst|FindMany)\w+Args$/.test(inputType.name),
        main: (inputTypes: InputType[]) =>
            inputTypes.find(x => /^FindMany\w+Args$/.test(x.name)),
    },
    {
        name: 'updateInput',
        match: (inputType: InputType) =>
            /\w+(Update|UpdateMany|UpdateManyMutation|Unchecked|UncheckedUpdate)Input$/.test(
                inputType.name,
            ),
        main: (inputTypes: InputType[]) => inputTypes[0],
    },
    { name: 'undefined', match: () => true },
];
