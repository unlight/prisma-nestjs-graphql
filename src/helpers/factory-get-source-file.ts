import AwaitEventEmitter from 'await-event-emitter/types';
import { Project } from 'ts-morph';

import { generateFileName } from './generate-file-name';

export function factoryGetSourceFile(args: {
    output: string;
    outputFilePattern: string;
    project: Project;
    getModelName(name: string): string | undefined;
    eventEmitter: AwaitEventEmitter;
}) {
    const { outputFilePattern, output, getModelName, project } = args;

    return function getSourceFile(args: { type: string; name: string }) {
        const { name, type } = args;
        let filePath = generateFileName({
            getModelName,
            name,
            type,
            template: outputFilePattern,
        });
        filePath = `${output}/${filePath}`;

        return (
            project.getSourceFile(filePath) ||
            project.createSourceFile(filePath, undefined, { overwrite: true })
        );
    };
}
