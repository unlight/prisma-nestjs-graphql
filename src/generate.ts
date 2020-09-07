import { DMMF as PrismaDMMF } from '@prisma/client/runtime/dmmf-types';
import { GeneratorOptions } from '@prisma/generator-helper';
import assert from 'assert';
import { boolean } from 'boolean';
import { existsSync, promises as fs } from 'fs';
import { join } from 'path';
import { Project, QuoteKind, SourceFile } from 'ts-morph';

import { generateEnum } from './generate-enum';
import { FileType, generateFileName, getFeatureName } from './generate-file-name';
import { generateInput } from './generate-input';
import { generateModel } from './generate-model';
import { mutateFilters } from './mutate-filters';
import { schemaFieldToArg as schemaFieldToArgument, schemaOutputToInput } from './type-utils';

type GenerateArgs = GeneratorOptions & {
    prismaClientDmmf?: PrismaDMMF.Document;
    fileExistsSync?: typeof existsSync;
};

export async function generate(args: GenerateArgs) {
    const { generator, otherGenerators } = args;
    const output = generator.output;
    assert(output, 'generator.output is empty');
    const fileExistsSync = args.fileExistsSync ?? existsSync;
    const prismaClientOutput = otherGenerators.find((x) => x.provider === 'prisma-client-js')
        ?.output;
    assert(prismaClientOutput, 'prismaClientOutput');
    const prismaClientDmmf =
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        args.prismaClientDmmf ?? ((await import(prismaClientOutput)).dmmf as PrismaDMMF.Document);
    const project = new Project({
        useInMemoryFileSystem: true,
        manipulationSettings: { quoteKind: QuoteKind.Single },
    });
    const models = prismaClientDmmf.datamodel.models.map((x) => x.name);
    const projectFilePath = (args: { name: string; type: FileType; feature?: string }) => {
        return generateFileName({
            ...args,
            template: generator.config.outputFilePattern,
            models,
        });
    };
    const createSourceFile = async (args: { type: FileType; name: string; feature?: string }) => {
        const filePath = projectFilePath(args);
        let sourceFile: SourceFile | undefined;
        sourceFile = project.getSourceFile(filePath);
        if (sourceFile) {
            return sourceFile;
        }
        let sourceFileText = '';
        const localFilePath = join(output, filePath);
        if (fileExistsSync(localFilePath)) {
            sourceFileText = await fs.readFile(localFilePath, { encoding: 'utf8' });
        }
        sourceFile = project.createSourceFile(filePath, sourceFileText);
        return sourceFile;
    };
    // Generate enums
    const enums = [...prismaClientDmmf.schema.enums, ...prismaClientDmmf.datamodel.enums];
    for (const enumerable of enums) {
        const sourceFile = await createSourceFile({ type: 'enum', name: enumerable.name });
        generateEnum({ enumerable, sourceFile });
    }
    // Generate models
    for (const model of prismaClientDmmf.datamodel.models) {
        const sourceFile = await createSourceFile({ type: 'model', name: model.name });
        generateModel({ model, sourceFile, projectFilePath });
    }
    // Generate inputs
    const inputTypes = prismaClientDmmf.schema.inputTypes.filter(
        mutateFilters(prismaClientDmmf.schema.inputTypes, {
            combineScalarFilters: boolean(generator.config.combineScalarFilters ?? true),
            atomicNumberOperations: boolean(generator.config.atomicNumberOperations ?? false),
        }),
    );
    // Create aggregate inputs
    const aggregateInputs = prismaClientDmmf.schema.outputTypes
        .filter((o) => o.name.endsWith('AggregateOutputType'))
        .map(schemaOutputToInput);
    for (const inputType of inputTypes.concat(aggregateInputs)) {
        let model: PrismaDMMF.Model | undefined;
        const feature = getFeatureName({ name: inputType.name, models, fallback: '' });
        if (feature) {
            model = prismaClientDmmf.datamodel.models.find((m) => m.name === feature);
        }
        const sourceFile = await createSourceFile({ type: 'input', name: inputType.name, feature });
        generateInput({
            inputType,
            sourceFile,
            projectFilePath,
            model,
            decorator: { name: 'InputType' },
        });
    }
    // Generate args
    const otherTypes = prismaClientDmmf.schema.outputTypes
        .filter((t) => t.name === 'Query')
        .flatMap((t) => t.fields)
        .map(schemaFieldToArgument);
    for (const inputType of otherTypes) {
        const feature = getFeatureName({ name: inputType.name, models, fallback: '' });
        assert(feature);
        const model = prismaClientDmmf.datamodel.models.find((m) => m.name === feature);
        if (inputType.name === `Aggregate${feature}Args`) {
            // Aggregate args
            inputType.fields.push({
                name: 'count',
                inputType: [
                    {
                        kind: 'scalar',
                        type: 'true',
                        isRequired: false,
                        isNullable: true,
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
                    inputType: [
                        {
                            kind: 'object',
                            type: aggregateInput.name,
                            isRequired: false,
                            isNullable: true,
                            isList: false,
                        },
                    ],
                });
            });
        }
        const sourceFile = await createSourceFile({
            type: 'args',
            name: inputType.name,
            feature,
        });
        generateInput({
            inputType,
            sourceFile,
            projectFilePath,
            model,
            decorator: { name: 'ArgsType' },
        });
    }

    return project;
}
