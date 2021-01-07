import { generatorHandler, GeneratorOptions } from '@prisma/generator-helper';

import { generate } from './generate';
import { reexport, remove, update } from './generator-pipelines';
import { createConfig } from './utils';

generatorHandler({
    async onGenerate(options: GeneratorOptions) {
        const config = createConfig(options.generator.config);
        const project = await generate({
            ...options,
            config,
        });
        if (config.reExportAll) {
            await reexport(project);
        }
        await remove(project, options);
        await update(project, options);
    },
    onManifest() {
        return {
            defaultOutput: '.',
            prettyName: 'Prisma NestJS/GraphQL',
            requiresGenerators: ['prisma-client-js'],
        };
    },
});
