import AwaitEventEmitter from 'await-event-emitter';

import { EventArguments, InputType } from '../types';

export function noAtomicOperations(eventEmitter: AwaitEventEmitter) {
  eventEmitter.on('BeforeInputType', beforeInputType);
  eventEmitter.on('BeforeGenerateFiles', beforeGenerateFiles);
}

function beforeInputType(args: EventArguments & { inputType: InputType }) {
  const { inputType, getModelName } = args;

  for (const field of inputType.fields) {
    const fieldName = field.name;
    field.inputTypes = field.inputTypes.filter(inputType => {
      const inputTypeName = String(inputType.type);
      const modelName = getModelName(inputTypeName);

      if (
        isAtomicOperation(inputTypeName) ||
        (modelName && isListInput(inputTypeName, modelName, fieldName))
      ) {
        return false;
      }
      return true;
    });
  }
}

function beforeGenerateFiles(args: EventArguments) {
  const { project } = args;

  for (const sourceFile of project.getSourceFiles()) {
    const className = sourceFile.getClass(() => true)?.getName();

    if (className && isAtomicOperation(className)) {
      project.removeSourceFile(sourceFile);
    }
  }
}

function isAtomicOperation(typeName: string) {
  if (typeName.endsWith('FieldUpdateOperationsInput')) {
    return true;
  }
  return false;
}

function isListInput(typeName: string, model: string, field: string) {
  return (
    typeName === `${model}Create${field}Input` ||
    typeName === `${model}Update${field}Input`
  );
}
