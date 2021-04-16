import { generatorHandler } from '@prisma/generator-helper';
import assert from 'assert';
import { promises as fs } from 'fs';

generatorHandler({
    async onGenerate(options) {
        const generatorOutput = options.generator.output?.value;
        assert(generatorOutput, 'generator output value');
        const prismaClientOutput = options.otherGenerators.find(
            x => x.provider.value === 'prisma-client-js',
        )?.output?.value;
        assert(prismaClientOutput, 'prismaClientOutput value');
        // eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        options['prismaClientDmmf'] = require(prismaClientOutput).dmmf;
        await fs.writeFile(
            `${generatorOutput}/options-${options.generator.config.hash}.js`,
            `module.exports = ${JSON.stringify(options, undefined, 2)}`,
        );
    },
    onManifest() {
        return {
            defaultOutput: '.',
            prettyName: 'proxy generator',
            requiresGenerators: ['prisma-client-js'],
        };
    },
});
