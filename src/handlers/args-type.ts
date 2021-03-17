import { getModelName } from '../helpers/get-model-name';
import { pascalCase } from '../helpers/pascal-case';
import { EventArguments, InputType, SchemaField } from '../types';

/**
 * See prisma client/src/generation/TSClient.ts @ getAggregationTypes
 * Subcribes on: 'ArgsType'
 */
export function argsType(field: SchemaField, args: EventArguments) {
    if (['queryRaw', 'executeRaw'].includes(field.name)) {
        return;
    }
    const { eventEmitter, modelNames, typeNames } = args;
    const className = pascalCase(`${field.name}Args`);
    const modelName = getModelName({ name: className, modelNames, fallback: '' });
    const inputType: InputType = {
        // eslint-disable-next-line unicorn/no-null
        constraints: { maxNumFields: null, minNumFields: null },
        name: className,
        fields: field.args,
    };

    if (
        // TODO: Figure out how to improve this (solve mutation)
        !field.args.some(x => x.name === 'count') &&
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
                name: name.toLowerCase(),
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
