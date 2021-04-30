import { generatorHandler, GeneratorOptions } from '@prisma/generator-helper';

import { generate } from './generate';

generatorHandler({
    async onGenerate(options: GeneratorOptions) {
        await generate(options);
    },
    onManifest() {
        return {
            defaultOutput: '.',
            prettyName: 'Prisma NestJS/GraphQL',
        };
    },
});
