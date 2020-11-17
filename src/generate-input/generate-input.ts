import { ClassDeclaration, SourceFile } from 'ts-morph';

import { DecoratorPropertyType, generateClass, generateClassProperty } from '../generate-class';
import { generateDecorator } from '../generate-decorator';
import { generateImport, generateProjectImport } from '../generate-import';
import { Field, generateProperty } from '../generate-property';
import { GeneratorConfiguration, PrismaDMMF } from '../types';
import { toGraphqlImportType, toPropertyType } from '../utils';
import { getMatchingInputType } from './get-matching-input-type';

type GenerateInputArgs = {
    inputType: PrismaDMMF.InputType;
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
    generateImport({ name: 'Field', sourceFile, moduleSpecifier: '@nestjs/graphql' });
    for (const field of inputType.fields) {
        // Additional import all objects
        field.inputTypes
            .filter((x) => ['object', 'enum'].includes(x.kind) && x.type !== className)
            .forEach((inputType) => {
                generateProjectImport({
                    name: String(inputType.type),
                    type: inputType.kind === 'object' ? 'input' : inputType.kind,
                    sourceFile,
                    projectFilePath,
                });
            });
        const propertyTypes = field.inputTypes.map((t) =>
            toPropertyType({ ...t, type: String(t.type) }),
        );
        const inputType = getMatchingInputType(field.inputTypes);
        const fieldStructure: Field = {
            ...field,
            kind: inputType.kind,
            type: String(inputType.type),
            isList: field.inputTypes.some((t) => t.isList),
            isRequired: false,
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
}
