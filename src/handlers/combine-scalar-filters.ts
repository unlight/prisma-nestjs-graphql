import AwaitEventEmitter from 'await-event-emitter';

import { DMMF, EventArguments, InputType } from '../types';

/**
 * Subscribes on 'beforeInputType'
 */
export function combineScalarFilters(eventEmitter: AwaitEventEmitter) {
    eventEmitter.on('begin', begin);
    eventEmitter.on('beforeInputType', beforeInputType);
    eventEmitter.on('beforeGenerateField', beforeGenerateField);
}

function begin(args: EventArguments) {
    args.context.bogusTypes = new Set();
}

function beforeInputType(
    args: EventArguments & {
        inputType: InputType;
        fileType: string;
        classDecoratorName: string;
    },
) {
    const { inputType, context } = args;

    // if ('EnumRoleNullableFilter' === inputType.name) {
    //     debugger;
    // }

    if (isContainBogus(inputType.name) && isScalarFilter(inputType)) {
        // context.bogusTypes.add(inputType.name);
        // console.log('bogus', inputType.name);
        inputType.name = replaceBogus(String(inputType.name));
        // console.log('inputType.name', inputType.name);
    }
    //  else {
    //     console.log('inputType.name', inputType.name);
    // }
}

function beforeGenerateField(field: DMMF.SchemaArg): void {
    for (const fieldInput of field.inputTypes) {
        if (fieldInput.location !== 'inputObjectTypes') {
            continue;
        }
        const fieldInputType = String(fieldInput.type);
        if (isContainBogus(fieldInputType)) {
            fieldInput.type = replaceBogus(fieldInputType);
        }
        //  else {
        //     if (fieldInputType.includes('Enum')) {
        //         console.log('fieldInputType', fieldInputType);
        //     }
        // }
    }
}

function replaceBogus(name: string) {
    return name.replace(/(Nullable|Nested)/g, '');
}

function isContainBogus(name: string) {
    return (
        name.startsWith('Nested') ||
        (name.includes('Nullable') && name.endsWith('Filter')) ||
        name.endsWith('NullableFilter')
    );
}

function isScalarFilter(inputType: InputType) {
    if (!inputType.name.endsWith('Filter')) {
        return false;
    }
    let result = false;
    // Check `not` field
    // OPTIMIZE: Field not usually in the end of fields array
    const notField = inputType.fields.find(f => f.name === 'not');
    if (notField) {
        result = notField.inputTypes.every(x => {
            return (
                String(x.type).includes(inputType.name) ||
                ['enumTypes', 'scalar'].includes(x.location)
            );
        });
    }
    return result;
}
