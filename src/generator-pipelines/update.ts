import { GeneratorOptions } from '@prisma/generator-helper';
import assert from 'assert';
import { existsSync, promises as fs } from 'fs';
import { dirname, resolve } from 'path';
import { Project } from 'ts-morph';

export async function update(project: Project, options: GeneratorOptions) {
    assert(options.generator.output);
    for (const sourceFile of project.getSourceFiles()) {
        const filePath = sourceFile.getFilePath();
        const outfile = resolve(options.generator.output, `.${filePath}`);
        const directory = dirname(outfile);
        if (!existsSync(directory)) {
            await fs.mkdir(directory, { recursive: true });
        }
        const sourceText = sourceFile.getText();
        await fs.writeFile(outfile, sourceText);
    }
}
