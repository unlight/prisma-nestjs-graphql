import { SourceFile } from 'ts-morph';

import { DecoratorPropertyType, generateClass } from '../generate-class';
import { generateImport, generateProjectImport } from '../generate-import';
import { Field, generateProperty } from '../generate-property';
import { GeneratorConfiguration, InputType } from '../types';
import { checkExport, fieldLocationToKind, toPropertyType } from '../utils';
import { getMatchingInputType } from './get-matching-input-type';

type GenerateInputArgs = {
    inputType: InputType;
    sourceFile: SourceFile;
    projectFilePath(data: { name: string; type: string }): string;
    decorator: DecoratorPropertyType;
    config: GeneratorConfiguration;
};

export function generateInput(args: GenerateInputArgs) {
    const { inputType, sourceFile, projectFilePath, decorator, config } = args;
    const className = inputType.name;
    const classDeclaration = generateClass({
        sourceFile,
        decorator,
        name: className,
    });

    generateImport({
        name: 'Field',
        sourceFile,
        moduleSpecifier: '@nestjs/graphql',
    });

    for (const field of inputType.fields) {
        // Union input type is not yet ready
        // Keep only one which same as graphql
        const matchInputType = getMatchingInputType(field.inputTypes);
        // Additional import all objects
        for (const inputType of [matchInputType].filter(
            x =>
                ['object', 'enum'].includes(fieldLocationToKind(x.location)) &&
                x.type !== className,
        )) {
            const kind = fieldLocationToKind(inputType.location);
            generateProjectImport({
                name: String(inputType.type),
                type: kind === 'object' ? 'input' : kind,
                sourceFile,
                projectFilePath,
            });
        }
        const propertyTypes = [matchInputType].map(t => {
            return toPropertyType({
                ...t,
                type: String(t.type),
                kind: fieldLocationToKind(t.location),
            });
        });

        const fieldStructure: Field = {
            ...field,
            kind: fieldLocationToKind(matchInputType.location),
            type: String(matchInputType.type),
            isList: field.inputTypes.some(t => t.isList),
        };

        generateProperty({
            projectFilePath,
            classDeclaration,
            sourceFile,
            className,
            field: fieldStructure,
            classType: 'input',
            propertyTypes,
            config,
        });
    }

    checkExport({ name: className, sourceFile, classDeclaration });
    sourceFile.organizeImports({ ensureNewLineAtEndOfFile: true });
}
