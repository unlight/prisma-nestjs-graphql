import { PrismaDMMF } from '../types';
import { renameInputs } from './rename-inputs';

export function replacementTypeName(name: string) {
    name = name
        .replace('CreateNestedMany', 'CreateMany')
        .replace('UncheckedCreateMany', 'CreateMany')
        .replace('UpdateNestedMany', 'UpdateMany')
        .replace('UncheckedUpdateMany', 'UpdateMany')
        .replace('CreateNestedOne', 'CreateOne')
        .replace('InputEnvelope', 'EnvelopeInput');

    return name;
}

export function renameZooTypes(inputTypes: PrismaDMMF.InputType[]) {
    const replacements = Object.fromEntries(
        inputTypes
            .map(t => [t.name, replacementTypeName(t.name)])
            .filter(({ 0: a, 1: b }) => a !== b),
    ) as Record<string, string>;

    return renameInputs(replacements);
}
