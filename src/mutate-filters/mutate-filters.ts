import { PrismaDMMF } from '../types';
import { combineScalarFilters } from './combine-scalar-filters';
import { noAtomicNumberOperations } from './no-atomic-number-operations';
import { removeDuplicateTypes } from './remove-duplicate-types';
import { renameZooTypes } from './rename-zoo-types';

type MutateFiltersOptions = {
    atomicNumberOperations?: boolean;
    combineScalarFilters?: boolean;
    renameZooTypes?: boolean;
    removeDuplicateTypes?: boolean;
};

export function mutateFilters(
    inputTypes: PrismaDMMF.InputType[],
    options: MutateFiltersOptions,
) {
    if (options.combineScalarFilters) {
        inputTypes = inputTypes.map(combineScalarFilters(inputTypes));
    }
    if (!options.atomicNumberOperations) {
        inputTypes = inputTypes.filter(noAtomicNumberOperations());
    }
    if (options.renameZooTypes) {
        inputTypes = inputTypes.map(renameZooTypes(inputTypes));
    }
    if (options.removeDuplicateTypes) {
        inputTypes = inputTypes.filter(removeDuplicateTypes(inputTypes));
    }

    return inputTypes;
}
