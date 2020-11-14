import { PrismaDMMF } from '../types';
import { combineScalarFilters } from './combine-scalar-filters';
import { noAtomicNumberOperations } from './no-atomic-number-operations';

type MutateFiltersOptions = {
    atomicNumberOperations?: boolean;
    combineScalarFilters?: boolean;
};

export function mutateFilters(inputTypes: PrismaDMMF.InputType[], options: MutateFiltersOptions) {
    const mutations = [
        options.combineScalarFilters && combineScalarFilters(inputTypes),
        !options.atomicNumberOperations && noAtomicNumberOperations(),
    ];

    return function (inputType: PrismaDMMF.InputType) {
        for (const mutation of mutations.filter(Boolean)) {
            const result = mutation && mutation(inputType);
            if (!result) {
                return false;
            }
            inputType = result;
        }
        return inputType;
    };
}
