import { GeneratorConfiguration, InputType } from '../types';
import { RemoveDuplicate } from '../utils';
import { combineScalarFilters } from './combine-scalar-filters';
import { noAtomicNumberOperations } from './no-atomic-number-operations';
import { removeDuplicateTypes } from './remove-duplicate-types';
import { renameZooTypes } from './rename-zoo-types';

export function mutateFilters(inputTypes: InputType[], config: GeneratorConfiguration) {
    if (config.combineScalarFilters) {
        inputTypes = inputTypes.map(combineScalarFilters(inputTypes));
    }
    if (config.noAtomicNumberOperations) {
        inputTypes = inputTypes.filter(noAtomicNumberOperations());
    }
    if (config.renameZooTypes) {
        inputTypes = inputTypes.map(renameZooTypes(inputTypes));
    }

    if (config.removeDuplicateTypes !== RemoveDuplicate.None) {
        // inputTypes = inputTypes.filter(removeDuplicateTypes(inputTypes, config));
    }

    return inputTypes;
}
