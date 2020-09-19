import { SourceFile } from 'ts-morph';

import { generateClass } from '../generate-class';
import { generateGraphqlImport } from '../generate-graphql-import';
import { generateProperty } from '../generate-property';
import { PrismaDMMF } from '../types';

type GenerateModelArgs = {
    model: PrismaDMMF.Model;
    sourceFile: SourceFile;
    projectFilePath(data: { name: string; type: string }): string;
};

/**
 * Generate model (class).
 */
export function generateModel(args: GenerateModelArgs) {
    const { model, sourceFile, projectFilePath } = args;
    const classDeclaration = generateClass({
        decorator: {
            name: 'ObjectType',
            properties: [{ name: 'description', value: model.documentation }],
        },
        sourceFile,
        name: model.name,
    });
    generateGraphqlImport({ name: 'Field', sourceFile, moduleSpecifier: '@nestjs/graphql' });
    model.fields.forEach((field) => {
        generateProperty({
            field,
            sourceFile,
            classDeclaration,
            className: model.name,
            classType: 'model',
            projectFilePath,
        });
    });
}
