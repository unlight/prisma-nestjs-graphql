import { SourceFile } from 'ts-morph';

import { generateClass } from './generate-class';
import { generateImport } from './generate-import';
import { generateProperty, Model } from './generate-property';
import { GeneratorConfiguration } from './types';
import { toPropertyType } from './utils';

type GenerateObjectArgs = {
    sourceFile: SourceFile;
    projectFilePath(data: { name: string; type: string }): string;
    model: Model;
    classType: string;
    config: GeneratorConfiguration;
};

/**
 * Generate object type (class).
 */
export function generateObject(args: GenerateObjectArgs) {
    const { model, classType, sourceFile, projectFilePath, config } = args;
    const classDeclaration = generateClass({
        decorator: {
            name: 'ObjectType',
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
            classType,
            projectFilePath,
            config,
        });
    });
}
