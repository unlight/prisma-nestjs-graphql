import { DMMF as PrismaDMMF } from '@prisma/client/runtime/dmmf-types';
import { SourceFile } from 'ts-morph';

import { generateClass } from './generate-class';
import { generateProperty } from './generate-property';

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

    model.fields
        .filter((field) => !field.isGenerated)
        .forEach((field) => {
            generateProperty({
                field,
                sourceFile,
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                classDeclaration: classDeclaration,
                className: model.name,
                projectFilePath,
                classType: 'model',
            });
        });
}
