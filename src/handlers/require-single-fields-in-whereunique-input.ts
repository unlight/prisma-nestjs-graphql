import AwaitEventEmitter from 'await-event-emitter';

import { isWhereUniqueInputType } from '../helpers/is-where-unique-input-type';
import { EventArguments, InputType } from '../types';

export function requireSingleFieldsInWhereUniqueInput(eventEmitter: AwaitEventEmitter) {
  eventEmitter.on('BeforeInputType', beforeInputType);
}

function beforeInputType(args: EventArguments & { inputType: InputType }) {
  const { inputType } = args;

  if (!isWhereUniqueInputType(inputType.name) || inputType.fields.length !== 1) {
    return;
  }

  for (const field of inputType.fields) {
    field.isRequired = true;
    field.isNullable = false;
  }
}
