import { DMMF as PrismaDMMF } from '@prisma/client/runtime/dmmf-types';
import { GeneratorOptions } from '@prisma/generator-helper';
import assert from 'assert';
import { existsSync, promises as fs } from 'fs';
import { Project, QuoteKind, SourceFile } from 'ts-morph';

import { generateEnum } from './generate-enum';
import { FileType, generateFileName } from './generate-file-name';
import { generateInput } from './generate-input';
import { generateModel } from './generate-model';

type GenerateArgs = GeneratorOptions & {
    prismaClientDmmf?: PrismaDMMF.Document;
    fileExistsSync?: typeof existsSync;
};

export async function generate(args: GenerateArgs) {
    const { generator, otherGenerators } = args;
    const fileExistsSync = args.fileExistsSync ?? existsSync;
    const prismaClientOutput = otherGenerators.find((x) => x.provider === 'prisma-client-js')
        ?.output;
    assert(prismaClientOutput, 'prismaClientOutput');
    const prismaClientDmmf =
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        args.prismaClientDmmf ?? ((await import(prismaClientOutput)).dmmf as PrismaDMMF.Document);
    const project = new Project({
        useInMemoryFileSystem: true,
        manipulationSettings: { quoteKind: QuoteKind.Single },
    });
    const models = prismaClientDmmf.datamodel.models.map((x) => x.name);
    const projectFilePath = (args: { name: string; type: FileType }) => {
        return generateFileName({
            ...args,
            template: generator.config.outputFilePattern,
            models,
        });
    };
    const createSourceFile = async (args: { type: FileType; name: string }) => {
        const filePath = projectFilePath(args);
        let sourceFile: SourceFile | undefined;
        sourceFile = project.getSourceFile(filePath);
        if (sourceFile) {
            return sourceFile;
        }
        let sourceFileText = '';
        if (fileExistsSync(filePath)) {
            sourceFileText = await fs.readFile(filePath, { encoding: 'utf8' });
        }
        sourceFile = project.createSourceFile(filePath, sourceFileText);
        return sourceFile;
    };
    // Generate enums
    const enums = [...prismaClientDmmf.schema.enums, ...prismaClientDmmf.datamodel.enums];
    for (const enumerable of enums) {
        const sourceFile = await createSourceFile({ type: 'enum', name: enumerable.name });
        generateEnum({ enumerable, sourceFile });
    }
    // Generate models
    for (const model of prismaClientDmmf.datamodel.models) {
        const sourceFile = await createSourceFile({ type: 'model', name: model.name });
        generateModel({ model, sourceFile, projectFilePath });
    }
    // Generate inputs
    for (const inputType of prismaClientDmmf.schema.inputTypes) {
        const sourceFile = await createSourceFile({ type: 'input', name: inputType.name });
        generateInput({ inputType, sourceFile, projectFilePath });
    }

    return project;
}
