import { DMMF as PrismaDMMF } from '@prisma/client/runtime/dmmf-types';
import assert from 'assert';
import { SourceFile } from 'ts-morph';

import { generateClass } from './generate-class';
import { generateProperty } from './generate-property';

type GenerateInputArgs = {
    inputType: PrismaDMMF.InputType;
    sourceFile: SourceFile;
    projectFilePath(data: { name: string; type: string }): string;
};

export function generateInput(args: GenerateInputArgs) {
    const { inputType, sourceFile, projectFilePath } = args;
    const classDeclaration = generateClass({
        sourceFile,
        decorator: {
            name: 'InputType',
            properties: [],
        },
        name: inputType.name,
    });

    for (const field of inputType.fields) {
        const matchInput = findInputType(field, inputType);
        generateProperty({
            field: {
                type: String(matchInput.type),
                kind: matchInput.kind,
                isList: matchInput.isList,
                name: field.name,
            },
            classDeclaration,
            className: inputType.name,
            classType: 'input',
            sourceFile,
            projectFilePath,
        });
    }
}

function findInputType(schemaArgument: PrismaDMMF.SchemaArg, inputType: PrismaDMMF.InputType) {
    return (
        (inputType.isWhereType && schemaArgument.inputType.find((x) => x.kind === 'object')) ||
        schemaArgument.inputType.find((x) => x.type === inputType.name) ||
        schemaArgument.inputType[0]
    );
}
