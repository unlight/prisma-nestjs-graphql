import { generatorHandler } from '@prisma/generator-helper';
import { ok } from 'assert';
import { promises as fs } from 'fs';

generatorHandler({
    async onGenerate(options) {
        const generatorOutput = options.generator.output?.value;
        ok(generatorOutput, 'Missing generator configuration: output');
        await fs.writeFile(
            `${generatorOutput}/options-${options.generator.config.hash}.js`,
            `module.exports = ${JSON.stringify(options, undefined, 2)}`,
        );
    },
    onManifest() {
        return {
            defaultOutput: '.',
            prettyName: 'proxy generator',
        };
    },
});
