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
    const { eventEmitter, typeNames, getModelName } = args;
    const className = pascalCase(`${field.name}Args`);
    const modelName = getModelName(className) || '';
    const inputType: InputType = {
        // eslint-disable-next-line unicorn/no-null
        constraints: { maxNumFields: null, minNumFields: null },
        name: className,
        fields: field.args,
    };

    if (
        !field.args.some(x => x.name === '_count') &&
        [`Aggregate${modelName}Args`, `GroupBy${modelName}Args`].includes(
            inputType.name,
        )
    ) {
        const names = ['Count', 'Avg', 'Sum', 'Min', 'Max'];
        if (`GroupBy${modelName}Args` === inputType.name) {
            // Make `by` property array only, noEnumerable
            const byField = inputType.fields.find(f => f.name === 'by');
            if (byField?.inputTypes) {
                byField.inputTypes = byField.inputTypes.filter(
                    inputType => inputType.isList,
                );
            }
        }
        for (const name of names) {
            if (!typeNames.has(`${modelName}${name}AggregateInput`)) {
                continue;
            }

            inputType.fields.push({
                name: `_${name.toLowerCase()}`,
                isRequired: false,
                isNullable: true,
                inputTypes: [
                    {
                        location: 'inputObjectTypes',
                        type: `${modelName}${name}AggregateInput`,
                        isList: false,
                    },
                ],
            });
        }
    }

    eventEmitter.emitSync('InputType', {
        ...args,
        inputType,
        fileType: 'args',
        classDecoratorName: 'ArgsType',
    });
}
