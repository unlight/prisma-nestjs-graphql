import { GeneratorOptions } from '@prisma/generator-helper';
import assert from 'assert';
import { existsSync, promises as fs } from 'fs';
import { resolve } from 'path';
import { Project, SourceFile } from 'ts-morph';

/**
 * Remove unchanged files
 */
export async function remove(project: Project, options: GeneratorOptions) {
    assert(options.generator.output);
    let testSourceFile: SourceFile | undefined;
    for (const sourceFile of project.getSourceFiles()) {
        const filePath = sourceFile.getFilePath();
        const outfile = resolve(options.generator.output, `.${filePath}`);
        if (existsSync(outfile)) {
            const testText = await fs.readFile(outfile, { encoding: 'utf8' });
            testSourceFile = project.createSourceFile('0.ts', testText, {
                overwrite: true,
            });
            testSourceFile.formatText({ ensureNewLineAtEndOfFile: true });
            sourceFile.formatText({ ensureNewLineAtEndOfFile: true });
            if (testSourceFile.getText() === sourceFile.getText()) {
                sourceFile.deleteImmediatelySync();
                project.removeSourceFile(sourceFile);
                project.removeSourceFile(testSourceFile);
                console.log('length', project.getSourceFiles().length);
            } else {
                if (outfile.includes('tag.model.ts')) {
                    console.log('testSourceFile.getText()', testSourceFile.getText());
                    console.log('sourceFile.getText()', sourceFile.getText());
                }
            }
        }
    }
    if (testSourceFile) {
        testSourceFile.deleteImmediatelySync();
    }
}
