import { EventArguments, InputType } from '../types';

export function typeNames(args: EventArguments & { inputType: InputType }) {
    const { inputType, typeNames } = args;
    typeNames.add(inputType.name);
}
