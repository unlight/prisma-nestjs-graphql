import AwaitEventEmitter from 'await-event-emitter';

import { argsType } from './args-type';
import { createAggregateInput } from './create-aggregate-input';
import { generateFiles } from './generate-files';
import { inputType } from './input-type';
import { modelData } from './model-data';
import { outputType } from './output-type';
import { registerEnum } from './register-enum';
import { typeNames } from './type-names';

export function handlers(emitter: AwaitEventEmitter) {
    emitter.on('model', modelData);
    emitter.on('enumType', registerEnum);
    emitter.on('outputType', outputType);
    emitter.on('aggregateOutput', createAggregateInput);
    emitter.on('inputType', inputType);
    emitter.on('argsType', argsType);
    emitter.on('generateFiles', generateFiles);
    emitter.on('inputType', typeNames);
}
