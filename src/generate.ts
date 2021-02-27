import { GeneratorOptions } from '@prisma/generator-helper';
import assert from 'assert';
import AwaitEventEmitter from 'await-event-emitter';
import { mapKeys } from 'lodash';
import { Project, QuoteKind } from 'ts-morph';

import { handlers } from './handlers';
import { createConfig } from './helpers/create-config';
import { generateFileName } from './helpers/generate-file-name';
import { DMMF, EventArguments, Model, OutputType } from './types';

export const eventEmitter = new AwaitEventEmitter();

// eventEmitter.on('aggregateOutput', () => console.log('>>>>>>>> aggregateOutput'));
// eventEmitter.on('argsType', () => console.log('>>>>>>>>> argsType'));

handlers(eventEmitter);

export async function generate(
    args: GeneratorOptions & {
        prismaClientDmmf?: DMMF.Document;
    },
) {
    const { generator, otherGenerators } = args;
    const config = createConfig(generator.config);
    assert(generator.output, 'generator.output is empty');
    const prismaClientOutput = otherGenerators.find(
        x => x.provider === 'prisma-client-js',
    )?.output;
    assert(prismaClientOutput, 'prismaClientOutput');
    const prismaClientDmmf =
        args.prismaClientDmmf ?? (require(prismaClientOutput).dmmf as DMMF.Document);
    const project = new Project({
        useInMemoryFileSystem: true,
        manipulationSettings: {
            quoteKind: QuoteKind.Single,
        },
    });
    const models = new Map<string, Model>();
    const modelNames: string[] = [];
    const queryOutputTypes: OutputType[] = [];
    const getSourceFile = (args: { type: string; name: string }) => {
        const filePath = generateFileName({
            modelNames,
            name: args.name,
            type: args.type,
            template: config.outputFilePattern,
        });
        return project.getSourceFile(filePath) || project.createSourceFile(filePath);
    };
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
    };

    await eventEmitter.emit('begin', eventArguments);

    for (const model of datamodel.models) {
        await eventEmitter.emit('model', model, eventArguments);
    }

    for (const enumType of enumTypes.prisma.concat(enumTypes.model || [])) {
        await eventEmitter.emit('enumType', enumType, eventArguments);
    }

    for (const outputType of outputObjectTypes.prisma.concat(outputObjectTypes.model)) {
        await eventEmitter.emit('outputType', outputType, eventArguments);
    }

    for (const inputType of inputObjectTypes.prisma.concat(
        inputObjectTypes.model || [],
    )) {
        await eventEmitter.emit('inputType', {
            ...eventArguments,
            inputType,
            fileType: 'input',
            classDecoratorName: 'InputType',
        });
    }

    for (const outputType of queryOutputTypes) {
        for (const field of outputType.fields) {
            await eventEmitter.emit('argsType', field, eventArguments);
        }
    }

    await eventEmitter.emit('generateFiles', eventArguments);
    await eventEmitter.emit('end', eventArguments);
}
