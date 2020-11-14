import { GeneratorOptions } from '@prisma/generator-helper';
import assert from 'assert';
import { existsSync, promises as fs } from 'fs';
import path from 'path';
import { Project } from 'ts-morph';
import { equals } from 'typescript-equals';

/**
 * Remove unchanged files
 */
export async function remove(project: Project, options: GeneratorOptions) {
    assert(options.generator.output);
    for (const sourceFile of project.getSourceFiles()) {
        const filePath = sourceFile.getFilePath();
        const outfile = path.resolve(options.generator.output, `.${filePath}`);
        if (existsSync(outfile)) {
            const outfileText = await fs.readFile(outfile, { encoding: 'utf8' });
            const sourceFileText = sourceFile.getText();
            if (equals(outfileText, sourceFileText)) {
                sourceFile.deleteImmediatelySync();
            }
        }
    }
}
