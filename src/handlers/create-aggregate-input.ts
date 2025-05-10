import { EventArguments, InputType, OutputType } from '../types';

/**
 * Create aggregate inputs from aggregate outputs.
 * See client/src/generation/TSClient.ts @ getAggregationTypes
 * Subcribes on: 'AggregateOutput'
 */
export function createAggregateInput(
  args: EventArguments & { outputType: OutputType },
) {
  const { eventEmitter, outputType } = args;
  const className = `${outputType.name}Input`;

  // console.dir({ outputType, className, __filename }, { depth: 5 });

  const inputType: InputType = {
    constraints: { maxNumFields: null, minNumFields: null },
    fields: outputType.fields.map(x => ({
      inputTypes: [
        {
          isList: false,
          location: 'scalar',
          type: 'true',
        },
      ],
      isNullable: x.isNullable ?? true,
      isRequired: false,
      name: x.name,
    })),
    name: className,
  };

  eventEmitter.emitSync('InputType', {
    ...args,
    classDecoratorName: 'InputType',
    fileType: 'input',
    inputType,
  });
}
