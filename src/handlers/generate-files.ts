import { existsSync, promises as fs } from 'fs';
import path from 'path';

import { EventArguments } from '../types';

export async function generateFiles(args: EventArguments) {
    const { project, output } = args;
    for (const sourceFile of project.getSourceFiles()) {
        const filePath = sourceFile.getFilePath();
        const outfile = path.resolve(output, `.${filePath}`);
        const directory = path.dirname(outfile);
        if (!existsSync(directory)) {
            await fs.mkdir(directory, { recursive: true });
        }
        const sourceText = sourceFile.getText();
        await fs.writeFile(outfile, sourceText);
    }
}
