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
  if (inputType.name === `Aggregate${feature}Args`) {
    // Aggregate args
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
    ['Avg', 'Sum', 'Min', 'Max'].forEach((name) => {
      const aggregateInput = aggregateInputs.find(
        (t) => t.name === `${feature}${name}AggregateInput`,
      );
      if (!aggregateInput) {
        return;
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
    });
  }
  generateInput({
    inputType,
    sourceFile,
    projectFilePath,
    decorator: { name: 'ArgsType' },
    config,
  });
}
