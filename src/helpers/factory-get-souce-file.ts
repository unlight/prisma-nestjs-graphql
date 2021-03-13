import { Project } from 'ts-morph';

import { generateFileName } from './generate-file-name';

export function factoryGetSourceFile(args: {
    output: string;
    outputFilePattern: string;
    project: Project;
    modelNames: string[];
}) {
    const { outputFilePattern, output, modelNames, project } = args;
    return function getSourceFile(args: { type: string; name: string }) {
        const { name, type } = args;
        let filePath = generateFileName({
            modelNames,
            name,
            type,
            template: outputFilePattern,
        });
        filePath = `${output}/${filePath}`;
        return project.getSourceFile(filePath) || project.createSourceFile(filePath);
    };
}
