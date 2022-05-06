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
    // eslint-disable-next-line unicorn/no-null
    constraints: { maxNumFields: null, minNumFields: null },
    name: className,
    fields: outputType.fields.map(x => ({
      name: x.name,
      isNullable: x.isNullable ?? true,
      isRequired: false,
      inputTypes: [
        {
          isList: false,
          type: 'true',
          location: 'scalar',
        },
      ],
    })),
  };

  eventEmitter.emitSync('InputType', {
    ...args,
    inputType,
    fileType: 'input',
    classDecoratorName: 'InputType',
  });
}
