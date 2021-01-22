import { SourceFile } from 'ts-morph';

import { generateInput } from './generate-input';
import { GeneratorConfiguration, PrismaDMMF } from './types';

type GenerateArgsArguments = {
    feature: string;
    inputType: PrismaDMMF.InputType;
    aggregateInputs: PrismaDMMF.InputType[];
    sourceFile: SourceFile;
    projectFilePath(data: { name: string; type: string }): string;
    config: GeneratorConfiguration;
};

export function generateArgs(args: GenerateArgsArguments) {
    const {
        inputType,
        feature,
        aggregateInputs,
        sourceFile,
        projectFilePath,
        config,
    } = args;
    if ([`Aggregate${feature}Args`, `GroupBy${feature}Args`].includes(inputType.name)) {
        // Aggregate args
        if (`Aggregate${feature}Args` === inputType.name) {
            inputType.fields.push({
                name: 'count',
                isRequired: false,
                isNullable: true,
                inputTypes: [
                    {
                        location: 'scalar',
                        type: 'true',
                        isList: false,
                    },
                ],
            });
        }
        const names = ['Avg', 'Sum', 'Min', 'Max'];
        if (`GroupBy${feature}Args` === inputType.name) {
            names.unshift('Count');
            // Make `by` property array only, noEnumerable
            const byField = inputType.fields.find(f => f.name === 'by');
            if (byField?.inputTypes) {
                byField.inputTypes = byField.inputTypes.filter(
                    inputType => inputType.isList,
                );
            }
        }
        for (const name of names) {
            const aggregateInput = aggregateInputs.find(
                t => t.name === `${feature}${name}AggregateInput`,
            );
            if (!aggregateInput) {
                continue;
            }
            inputType.fields.push({
                name: name.toLowerCase(),
                isRequired: false,
                isNullable: true,
                inputTypes: [
                    {
                        location: 'inputObjectTypes',
                        type: aggregateInput.name,
                        isList: false,
                    },
                ],
            });
        }
    }
    generateInput({
        inputType,
        sourceFile,
        projectFilePath,
        decorator: { name: 'ArgsType' },
        config,
    });
}
