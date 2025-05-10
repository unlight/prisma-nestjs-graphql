import { isManyAndReturnOutputType } from '../helpers/is-many-and-return';
import { pascalCase } from '../helpers/pascal-case';
import { EventArguments, InputType, SchemaField } from '../types';

/**
 * See https://github.com/prisma/prisma/blob/master/src/packages/client/src/generation/TSClient/Model.ts@getAggregationTypes
 * Subcribes on: 'ArgsType'
 */
export function argsType(field: SchemaField, args: EventArguments) {
  if (['queryRaw', 'executeRaw'].includes(field.name)) {
    return;
  }
  if (isManyAndReturnOutputType(field.name)) return;

  const { eventEmitter, getModelName, typeNames } = args;
  let className = pascalCase(`${field.name}Args`);
  const modelName = getModelName(className) || '';

  switch (className) {
    case `Aggregate${modelName}Args`: {
      className = `${modelName}AggregateArgs`;
      break;
    }
    case `GroupBy${modelName}Args`: {
      className = `${modelName}GroupByArgs`;
      break;
    }
  }

  const inputType: InputType = {
    constraints: { maxNumFields: null, minNumFields: null },
    fields: [...field.args],
    name: className,
  };

  if (
    !field.args.some(x => x.name === '_count') &&
    [`${modelName}AggregateArgs`, `${modelName}GroupByArgs`].includes(className)
  ) {
    const names = ['Count', 'Avg', 'Sum', 'Min', 'Max'];
    if (`${modelName}GroupByArgs` === inputType.name) {
      // Make `by` property array only, noEnumerable
      const byField = inputType.fields.find(f => f.name === 'by');
      if (byField?.inputTypes) {
        byField.inputTypes = byField.inputTypes.filter(inputType => inputType.isList);
      }
    }
    for (const name of names) {
      if (!typeNames.has(`${modelName}${name}AggregateInput`)) {
        continue;
      }

      inputType.fields.push({
        inputTypes: [
          {
            isList: false,
            location: 'inputObjectTypes',
            type: `${modelName}${name}AggregateInput`,
          },
        ],
        isNullable: true,
        isRequired: false,
        name: `_${name.toLowerCase()}`,
      });
    }
  }

  eventEmitter.emitSync('InputType', {
    ...args,
    classDecoratorName: 'ArgsType',
    fileType: 'args',
    inputType,
  });
}
