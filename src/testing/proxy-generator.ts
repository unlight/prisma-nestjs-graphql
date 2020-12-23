import { generatorHandler } from '@prisma/generator-helper';
import assert from 'assert';
import { promises as fs } from 'fs';

generatorHandler({
    async onGenerate(options) {
        assert(options.generator.output);
        const prismaClientOutput = options.otherGenerators.find(
            x => x.provider === 'prisma-client-js',
        )?.output;
        assert(prismaClientOutput, 'prismaClientOutput');
        // eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        options['prismaClientDmmf'] = require(prismaClientOutput).dmmf;
        await fs.writeFile(
            `${options.generator.output}/options-${options.generator.config.hash}.js`,
            `module.exports = ${JSON.stringify(options, undefined, 2)}`,
        );
    },
    onManifest() {
        return {
            defaultOutput: '.',
            prettyName: 'dummy generator',
            requiresGenerators: ['prisma-client-js'],
        };
    },
});
