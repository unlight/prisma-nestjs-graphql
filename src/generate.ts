import { GeneratorOptions } from '@prisma/generator-helper';
import { ok } from 'assert';
import AwaitEventEmitter from 'await-event-emitter';
import { existsSync } from 'fs';
import { mapKeys } from 'lodash';
import { Project, QuoteKind } from 'ts-morph';

import { argsType } from './handlers/args-type';
import { combineScalarFilters } from './handlers/combine-scalar-filters';
import { createAggregateInput } from './handlers/create-aggregate-input';
import { emitSingle } from './handlers/emit-single';
import { beforeGenerateFiles, generateFiles } from './handlers/generate-files';
import { inputType } from './handlers/input-type';
import { modelData } from './handlers/model-data';
import { modelOutputType } from './handlers/model-output-type';
import { noAtomicOperations } from './handlers/no-atomic-operations';
import { outputType } from './handlers/output-type';
import { ReExport, reExport } from './handlers/re-export';
import { registerEnum } from './handlers/register-enum';
import { typeNames } from './handlers/type-names';
import { warning } from './handlers/warning';
import { createConfig } from './helpers/create-config';
import { factoryGetSourceFile } from './helpers/factory-get-souce-file';
import { createGetModelName } from './helpers/get-model-name';
import { DMMF, EventArguments, Field, FieldSettings, Model, OutputType } from './types';

export async function generate(
    args: GeneratorOptions & {
        skipAddOutputSourceFiles?: boolean;
        connectCallback?: (
            emitter: AwaitEventEmitter,
            eventArguments: EventArguments,
        ) => void | Promise<void>;
    },
) {
    const { connectCallback, generator, skipAddOutputSourceFiles, dmmf } = args;

    const generatorOutputValue = generator.output?.value;
    ok(generatorOutputValue, 'Missing generator configuration: output');

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
    eventEmitter.on('BeforeGenerateFiles', beforeGenerateFiles);
    eventEmitter.on('GenerateFiles', generateFiles);

    const config = createConfig(generator.config);
    for (const message of config.$warnings) {
        eventEmitter.emitSync('Warning', message);
    }

    const project = new Project({
        tsConfigFilePath: config.tsConfigFilePath,
        skipAddingFilesFromTsConfig: true,
        skipLoadingLibFiles: !config.emitCompiled,
        manipulationSettings: {
            quoteKind: QuoteKind.Single,
        },
    });

    if (!skipAddOutputSourceFiles) {
        project.addSourceFilesAtPaths([
            `${generatorOutputValue}/**/*.ts`,
            `!${generatorOutputValue}/**/*.d.ts`,
        ]);
    }

    config.combineScalarFilters && combineScalarFilters(eventEmitter);
    config.noAtomicOperations && noAtomicOperations(eventEmitter);
    config.reExport !== ReExport.None && reExport(eventEmitter);
    config.emitSingle && emitSingle(eventEmitter);

    const models = new Map<string, Model>();
    const modelNames: string[] = [];
    const modelFields = new Map<string, Map<string, Field>>();
    const fieldSettings = new Map<string, Map<string, FieldSettings>>();
    const getModelName = createGetModelName(modelNames);
    const getSourceFile = factoryGetSourceFile({
        output: generatorOutputValue,
        project,
        getModelName,
        outputFilePattern: config.outputFilePattern,
        eventEmitter,
    });
    const {
        datamodel,
        schema: { inputObjectTypes, outputObjectTypes, enumTypes },
    } = JSON.parse(JSON.stringify(dmmf)) as DMMF.Document;
    const eventArguments: EventArguments = {
        models,
        config,
        modelNames,
        modelFields,
        fieldSettings,
        project,
        output: generatorOutputValue,
        getSourceFile,
        eventEmitter,
        typeNames: new Set<string>(),
        enums: mapKeys(datamodel.enums, x => x.name),
        getModelName: createGetModelName(modelNames),
    };

    // console.dir(prismaClientDmmf.schema.outputObjectTypes, { depth: 4 });

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

    const queryOutputTypes: OutputType[] = [];

    for (const outputType of outputObjectTypes.prisma) {
        if (['Query', 'Mutation'].includes(outputType.name)) {
            queryOutputTypes.push(outputType);
            continue;
        }
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
