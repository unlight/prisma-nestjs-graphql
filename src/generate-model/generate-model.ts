import { SourceFile } from 'ts-morph';

import { generateClass } from '../generate-class';
import { generateImport } from '../generate-import';
import { generateProperty } from '../generate-property';
import { GeneratorConfiguration, PrismaDMMF } from '../types';

type GenerateModelArgs = {
    model: PrismaDMMF.Model;
    sourceFile: SourceFile;
    projectFilePath(data: { name: string; type: string }): string;
    config: GeneratorConfiguration;
};

/**
 * Generate model (class).
 */
export function generateModel(args: GenerateModelArgs) {
    const { model, sourceFile, projectFilePath, config } = args;
    const classDeclaration = generateClass({
        decorator: {
            name: 'ObjectType',
            properties: [{ name: 'description', value: model.documentation }],
        },
        sourceFile,
        name: model.name,
    });
    generateImport({ name: 'Field', sourceFile, moduleSpecifier: '@nestjs/graphql' });
    model.fields.forEach((field) => {
        generateProperty({
            field,
            sourceFile,
            classDeclaration,
            className: model.name,
            classType: 'model',
            projectFilePath,
            config,
        });
    });
}
