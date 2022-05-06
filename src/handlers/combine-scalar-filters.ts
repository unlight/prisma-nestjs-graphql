import AwaitEventEmitter from 'await-event-emitter';

import { DMMF, EventArguments, InputType } from '../types';

/**
 * Subscribes on 'BeforeInputType'
 */
export function combineScalarFilters(eventEmitter: AwaitEventEmitter) {
  eventEmitter.on('BeforeInputType', beforeInputType);
  eventEmitter.on('BeforeGenerateField', beforeGenerateField);
}

function beforeInputType(
  args: EventArguments & {
    inputType: InputType;
    fileType: string;
    classDecoratorName: string;
  },
) {
  const { inputType } = args;

  if (isContainBogus(inputType.name) && isScalarFilter(inputType)) {
    inputType.name = replaceBogus(String(inputType.name));
  }
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
  const equals = inputType.fields.find(f => f.name === 'equals');
  if (equals) {
    result = equals.inputTypes.every(x => {
      return ['enumTypes', 'scalar'].includes(x.location);
    });
  }
  return result;
}
