import { GeneratorOptions } from '@prisma/generator-helper';
import assert from 'assert';
import AwaitEventEmitter from 'await-event-emitter';
import { mapKeys } from 'lodash';
import { Project, QuoteKind } from 'ts-morph';

import { argsType } from './handlers/args-type';
import { combineScalarFilters } from './handlers/combine-scalar-filters';
import { createAggregateInput } from './handlers/create-aggregate-input';
import { generateFiles } from './handlers/generate-files';
import { inputType } from './handlers/input-type';
import { modelData } from './handlers/model-data';
import { modelOutputType } from './handlers/model-output-type';
import { noAtomicOperations } from './handlers/no-atomic-operations';
import { outputType } from './handlers/output-type';
import { reExportAll } from './handlers/re-export-all';
import { registerEnum } from './handlers/register-enum';
import { typeNames } from './handlers/type-names';
import { warning } from './handlers/warning';
import { createConfig } from './helpers/create-config';
import { factoryGetSourceFile } from './helpers/factory-get-souce-file';
import { DMMF, EventArguments, Field, Model, OutputType } from './types';

export async function generate(
    args: GeneratorOptions & {
        prismaClientDmmf?: DMMF.Document;
        connectCallback?: (
            emitter: AwaitEventEmitter,
            eventArguments: EventArguments,
        ) => void | Promise<void>;
    },
) {
    const { connectCallback, generator, otherGenerators } = args;
    const eventEmitter = new AwaitEventEmitter();
    eventEmitter.on('Warning', warning);
    eventEmitter.on('Model', modelData);
    eventEmitter.on('EnumType', registerEnum);
    eventEmitter.on('OutputType', outputType);
    eventEmitter.on('ModelOutputType', modelOutputType);
    eventEmitter.on('AggregateOutput', createAggregateInput);
    eventEmitter.on('InputType', inputType);
    eventEmitter.on('InputType', typeNames);
    eventEmitter.on('ArgsType', argsType);
    eventEmitter.on('GenerateFiles', generateFiles);
    assert(generator.output, 'generator.output is empty');
    const config = createConfig(generator.config);
    for (const message of config.$warnings) {
        eventEmitter.emitSync('Warning', message);
    }
    const prismaClientOutput = otherGenerators.find(
        x => x.provider === 'prisma-client-js',
    )?.output;
    assert(prismaClientOutput, 'Cannot find output of prisma-client-js');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const prismaClientDmmf: DMMF.Document = JSON.parse(
        JSON.stringify(
            args.prismaClientDmmf ??
                (require(prismaClientOutput).dmmf as DMMF.Document),
        ),
    );
    // generator.output
    const project = new Project({
        tsConfigFilePath: 'tsconfig.json',
        skipAddingFilesFromTsConfig: true,
        skipLoadingLibFiles: true,
        manipulationSettings: {
            quoteKind: QuoteKind.Single,
        },
    });

    config.combineScalarFilters && combineScalarFilters(eventEmitter);
    config.noAtomicOperations && noAtomicOperations(eventEmitter);
    config.reExportAll && reExportAll(eventEmitter);

    const models = new Map<string, Model>();
    const modelNames: string[] = [];
    const modelFields = new Map<string, Map<string, Field>>();
    const queryOutputTypes: OutputType[] = [];
    const getSourceFile = factoryGetSourceFile({
        output: generator.output,
        project,
        modelNames,
        outputFilePattern: config.outputFilePattern,
    });
    const {
        datamodel,
        schema: { inputObjectTypes, outputObjectTypes, enumTypes },
    } = prismaClientDmmf;
    const eventArguments: EventArguments = {
        models,
        config,
        modelNames,
        queryOutputTypes,
        project,
        output: generator.output,
        getSourceFile,
        eventEmitter,
        typeNames: new Set<string>(),
        enums: mapKeys(datamodel.enums, x => x.name),
        modelFields,
    };

    if (connectCallback) {
        await connectCallback(eventEmitter, eventArguments);
    }

    await eventEmitter.emit('Begin', eventArguments);

    for (const model of datamodel.models) {
        await eventEmitter.emit('Model', model, eventArguments);
    }

    await eventEmitter.emit('PostBegin', eventArguments);

    for (const enumType of enumTypes.prisma.concat(enumTypes.model || [])) {
        await eventEmitter.emit('EnumType', enumType, eventArguments);
    }

    for (const outputType of outputObjectTypes.model) {
        await eventEmitter.emit('ModelOutputType', outputType, eventArguments);
    }

    for (const outputType of outputObjectTypes.prisma) {
        await eventEmitter.emit('OutputType', outputType, eventArguments);
    }

    for (const inputType of inputObjectTypes.prisma.concat(
        inputObjectTypes.model || [],
    )) {
        const event = {
            ...eventArguments,
            inputType,
            fileType: 'input',
            classDecoratorName: 'InputType',
        };
        await eventEmitter.emit('BeforeInputType', event);
        await eventEmitter.emit('InputType', event);
    }

    for (const outputType of queryOutputTypes) {
        for (const field of outputType.fields) {
            await eventEmitter.emit('ArgsType', field, eventArguments);
        }
    }

    await eventEmitter.emit('BeforeGenerateFiles', eventArguments);
    await eventEmitter.emit('GenerateFiles', eventArguments);
    await eventEmitter.emit('End', eventArguments);

    for (const name of Object.keys(eventEmitter._events)) {
        eventEmitter.off(name);
    }
}
