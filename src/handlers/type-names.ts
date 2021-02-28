import { EventArguments, InputType } from '../types';

/**
 * Subscribes on:
 * 'inputType'
 */
export function typeNames(args: EventArguments & { inputType: InputType }) {
    const { inputType, typeNames } = args;
    typeNames.add(inputType.name);
}
