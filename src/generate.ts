import { GeneratorOptions } from '@prisma/generator-helper';
import assert from 'assert';
import { existsSync, promises as fs } from 'fs';
import { join } from 'path';
import { Project, QuoteKind, SourceFile } from 'ts-morph';

import { featureName } from './feature-name';
import { generateArgs } from './generate-args';
import { generateEnum } from './generate-enum';
import { generateFileName } from './generate-file-name';
import { generateInput } from './generate-input';
import { generateModel } from './generate-model';
import { generateObject } from './generate-object';
import { mutateFilters } from './mutate-filters';
import { schemaFieldToArgument, schemaOutputToInput } from './type-utils';
import { PrismaDMMF } from './types';

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
    const projectFilePath = (args: { name: string; type: string; feature?: string }) => {
        return generateFileName({
            ...args,
            template: generator.config.outputFilePattern,
            models,
        });
    };
    const createSourceFile = async (args: { type: string; name: string; feature?: string }) => {
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
    const enums = [
        ...prismaClientDmmf.schema.enums,
        ...prismaClientDmmf.datamodel.enums.map((x) => ({
            name: x.name,
            values: x.values.map((v) => v.name),
            documentation: x.documentation,
        })),
    ];
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
            combineScalarFilters: JSON.parse(generator.config.combineScalarFilters ?? 'true'),
            atomicNumberOperations: JSON.parse(generator.config.atomicNumberOperations ?? 'false'),
        }),
    );
    // Create aggregate inputs
    const aggregateInputs = prismaClientDmmf.schema.outputTypes
        .filter((o) => o.name.endsWith('AggregateOutputType'))
        .map(schemaOutputToInput);
    for (const inputType of inputTypes.concat(aggregateInputs)) {
        let model: PrismaDMMF.Model | undefined;
        const feature = featureName({ name: inputType.name, models, fallback: '' });
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
        const feature = featureName({ name: inputType.name, models, fallback: '' });
        assert(feature);
        const model = prismaClientDmmf.datamodel.models.find((m) => m.name === feature);
        const sourceFile = await createSourceFile({
            type: 'args',
            name: inputType.name,
            feature,
        });
        generateArgs({ model, inputType, feature, aggregateInputs, sourceFile, projectFilePath });
    }
    // Generate output types
    const getOutputTypeName = (name: string) => name.replace(/OutputType$/, '');
    const outputTypes = prismaClientDmmf.schema.outputTypes.filter(
        (t) => !['Query', 'Mutation'].includes(t.name) && !models.find((name) => name === t.name),
    );
    for (const outputType of outputTypes) {
        const name = getOutputTypeName(outputType.name);
        if (models.find((model) => name === `Aggregate${model}`)) {
            outputType.fields.forEach((field) => {
                field.outputType.type = getOutputTypeName(String(field.outputType.type));
            });
        }
        const sourceFile = await createSourceFile({ type: 'output', name });
        const model = {
            name,
            fields: outputType.fields.map((t) => {
                return {
                    name: t.name,
                    ...t.outputType,
                    type: String(t.outputType.type),
                    isRequired: false,
                };
            }),
        };
        generateObject({
            classType: 'output',
            sourceFile,
            projectFilePath,
            model,
        });
    }

    return project;
}
