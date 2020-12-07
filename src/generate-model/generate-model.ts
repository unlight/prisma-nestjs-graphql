import { SourceFile } from 'ts-morph';

import { generateClass } from '../generate-class';
import { generateImport } from '../generate-import';
import { generateProperty, Model } from '../generate-property';
import { GeneratorConfiguration } from '../types';
import { checkExport } from '../utils';

type GenerateModelArgs = {
    classType: string;
    model: Model;
    sourceFile: SourceFile;
    projectFilePath(data: { name: string; type: string }): string;
    config: GeneratorConfiguration;
};

/**
 * Generate model (class).
 */
export function generateModel(args: GenerateModelArgs) {
    const { model, classType, sourceFile, projectFilePath, config } = args;
    const classDeclaration = generateClass({
        decorator: {
            name: 'ObjectType',
            properties: [{ name: 'description', value: model.documentation }],
        },
        sourceFile,
        name: model.name,
    });

    generateImport({ name: 'Field', sourceFile, moduleSpecifier: '@nestjs/graphql' });
    model.fields
        .filter((field) => !classDeclaration.getProperty(field.name))
        .forEach((field) => {
            generateProperty({
                field,
                sourceFile,
                classDeclaration,
                className: model.name,
                classType,
                projectFilePath,
                config,
            });
        });
    checkExport({ name: model.name, classDeclaration, sourceFile });
}
