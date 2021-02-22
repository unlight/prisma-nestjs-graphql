import { GeneratorOptions } from '@prisma/generator-helper';
import assert from 'assert';
import { existsSync, promises as fs } from 'fs';
import { uniqBy } from 'lodash';
import path from 'path';
import { Project, QuoteKind, SourceFile } from 'ts-morph';

import { generateArgs } from './generate-args';
import { generateEnum } from './generate-enum';
import { generateInput } from './generate-input';
import { generateModel } from './generate-model';
import { Model } from './generate-property';
import { mutateFilters } from './mutate-filters';
import { DMMF, GeneratorConfiguration } from './types';
import {
    createConfig,
    featureName,
    fieldLocationToKind,
    generateFileName,
    getOutputTypeName,
    schemaFieldToArgument,
    schemaOutputToInput,
} from './utils';

type GenerateArgs = GeneratorOptions & {
    prismaClientDmmf?: DMMF.Document;
    fileExistsSync?: typeof existsSync;
    config?: GeneratorConfiguration;
};

export async function generate(args: GenerateArgs) {
    const { generator, otherGenerators } = args;
    const config = args.config ?? createConfig(generator.config);
    assert(generator.output, 'generator.output is empty');
    const fileExistsSync = args.fileExistsSync ?? existsSync;
    const prismaClientOutput = otherGenerators.find(
        x => x.provider === 'prisma-client-js',
    )?.output;
    assert(prismaClientOutput, 'prismaClientOutput');
    const prismaClientDmmf =
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        args.prismaClientDmmf ??
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        ((await import(prismaClientOutput)).dmmf as DMMF.Document);
    const project = new Project({
        useInMemoryFileSystem: true,
        manipulationSettings: {
            quoteKind: QuoteKind.Single,
            useTrailingCommas: true,
        },
    });
    const models = prismaClientDmmf.datamodel.models.map(x => x.name);
    const projectFilePath = (args: {
        name: string;
        type: string;
        feature?: string;
    }) => {
        return generateFileName({
            ...args,
            template: config.outputFilePattern,
            models,
        });
    };
    const createSourceFile = async (args: {
        type: string;
        name: string;
        feature?: string;
    }) => {
        const filePath = projectFilePath(args);
        let sourceFile: SourceFile | undefined;
        sourceFile = project.getSourceFile(filePath);
        if (sourceFile) {
            return sourceFile;
        }
        let sourceFileText = '';
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const localFilePath = path.join(generator.output!, filePath);
        if (fileExistsSync(localFilePath)) {
            sourceFileText = await fs.readFile(localFilePath, {
                encoding: 'utf8',
            });
        }
        sourceFile = project.createSourceFile(filePath, sourceFileText);
        return sourceFile;
    };
    // Generate enums
    const enums = [
        ...(prismaClientDmmf.schema.enumTypes.model || []),
        ...prismaClientDmmf.schema.enumTypes.prisma,
    ];
    for (const enumerable of enums) {
        const sourceFile = await createSourceFile({
            type: 'enum',
            name: enumerable.name,
        });
        generateEnum({ enumerable, sourceFile });
    }
    // Generate models
    for (const model of prismaClientDmmf.datamodel.models) {
        const sourceFile = await createSourceFile({
            type: 'model',
            name: model.name,
        });
        generateModel({
            classType: 'model',
            model,
            sourceFile,
            projectFilePath,
            config,
        });
    }
    // Generate inputs
    let inputTypes = prismaClientDmmf.schema.inputObjectTypes.prisma;
    const aggregateInputs = prismaClientDmmf.schema.outputObjectTypes.prisma
        .filter(o => o.name.endsWith('AggregateOutputType'))
        .map(o => schemaOutputToInput(o));
    inputTypes = inputTypes.concat(aggregateInputs);
    inputTypes = mutateFilters(inputTypes, config);
    inputTypes = uniqBy(inputTypes, x => x.name);
    for (const inputType of inputTypes) {
        const feature = featureName({
            name: inputType.name,
            models,
            fallback: '',
        });
        const sourceFile = await createSourceFile({
            type: 'input',
            name: inputType.name,
            feature,
        });
        generateInput({
            inputType,
            sourceFile,
            projectFilePath,
            decorator: { name: 'InputType' },
            config,
        });
    }
    // Generate args
    let otherTypes = prismaClientDmmf.schema.outputObjectTypes.prisma
        .filter(t => t.name === 'Query')
        .flatMap(t => t.fields)
        .map(field => schemaFieldToArgument(field));
    otherTypes = mutateFilters(otherTypes, config);
    for (const inputType of otherTypes) {
        const feature = featureName({
            name: inputType.name,
            models,
            fallback: '',
        });
        assert(feature);
        const sourceFile = await createSourceFile({
            type: 'args',
            name: inputType.name,
            feature,
        });
        generateArgs({
            inputType,
            feature,
            aggregateInputs,
            sourceFile,
            projectFilePath,
            config,
        });
    }
    // Generate output types
    const outputTypes = prismaClientDmmf.schema.outputObjectTypes.prisma
        .filter(
            t => !['Query', 'Mutation'].includes(t.name) && !models.includes(t.name),
        )
        .map(outputType => {
            outputType.name = getOutputTypeName(outputType.name);
            for (const field of outputType.fields) {
                field.outputType.type = getOutputTypeName(
                    String(field.outputType.type),
                );
            }
            return outputType;
        });

    for (const outputType of outputTypes) {
        const sourceFile = await createSourceFile({
            type: 'output',
            name: outputType.name,
        });
        const model: Model = {
            name: outputType.name,
            fields: outputType.fields.map(t => {
                return {
                    name: t.name,
                    isRequired: !t.isNullable,
                    ...t.outputType,
                    type: String(t.outputType.type),
                    kind: fieldLocationToKind(t.outputType.location),
                };
            }),
        };
        generateModel({
            classType: 'output',
            sourceFile,
            projectFilePath,
            model,
            config,
        });
    }

    return project;
}
