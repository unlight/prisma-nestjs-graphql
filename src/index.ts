import { generatorHandler, GeneratorOptions } from '@prisma/generator-helper';

import { generate } from './generate';
import { createConfig } from './helpers/create-config';

generatorHandler({
    async onGenerate(options: GeneratorOptions) {
        const config = createConfig(options.generator.config);
        await generate({
            ...options,
            config,
        });
    },
    onManifest() {
        return {
            defaultOutput: '.',
            prettyName: 'Prisma NestJS/GraphQL',
            requiresGenerators: ['prisma-client-js'],
        };
    },
});
