import { ok } from 'assert';
import AwaitEventEmitter from 'await-event-emitter/types';
import expect from 'expect';
import { Project } from 'ts-morph';

import { generate } from '../generate';
import { generateFileName } from '../helpers/generate-file-name';
import { EventArguments } from '../types';
import { createGeneratorOptions } from './create-generator-options';

export async function testGenerate(args: {
    schema: string;
    options?: string[];
    createSouceFile?: {
        text: string;
        name: string;
        type: string;
    };
    onConnect?: (emitter: AwaitEventEmitter) => void;
}) {
    const { schema, options, createSouceFile, onConnect } = args;
    let project: Project | undefined;
    const connectCallback = (emitter: AwaitEventEmitter) => {
        onConnect && onConnect(emitter);
        emitter.off('GenerateFiles');
        if (createSouceFile) {
            emitter.on(
                'PostBegin',
                ({ config, project, output, getModelName }: EventArguments) => {
                    const filePath = generateFileName({
                        type: createSouceFile.type,
                        name: createSouceFile.name,
                        getModelName,
                        template: config.outputFilePattern,
                    });
                    project.createSourceFile(
                        `${output}/${filePath}`,
                        createSouceFile.text,
                        { overwrite: true },
                    );
                },
            );
        }
        emitter.on('End', (args: { project: Project }) => {
            ({ project } = args);
        });
    };
    await generate({
        ...(await createGeneratorOptions(schema, options)),
        skipAddOutputSourceFiles: true,
        connectCallback,
    });

    ok(project, 'Project is not defined');
    const sourceFiles = project.getSourceFiles();
    let emptyFiles: string[] = [];
    try {
        emptyFiles = sourceFiles.filter(s => !s.getText()).map(s => s.getFilePath());
        expect(emptyFiles).toHaveLength(0);
    } catch {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw `Project should not contain empty files: ${emptyFiles}`;
    }

    return { project, sourceFiles };
}
