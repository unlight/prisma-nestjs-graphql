import { isWhereUniqueInputType } from '../helpers/type-checkers.ts';
import type {
  EventArguments,
  InputType,
  TAwaitEventEmitter,
} from '../types.ts';

export function requireSingleFieldsInWhereUniqueInput(
  eventEmitter: TAwaitEventEmitter,
) {
  eventEmitter.on('BeforeInputType', beforeInputType);
}

function beforeInputType(args: EventArguments & { inputType: InputType }) {
  const { inputType } = args;

  if (
    !isWhereUniqueInputType(inputType.name) ||
    inputType.fields.length !== 1
  ) {
    return;
  }

  for (const field of inputType.fields) {
    field.isRequired = true;
    field.isNullable = false;
  }
}
