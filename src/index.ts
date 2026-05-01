import type { GeneratorOptions } from '@prisma/generator-helper';
import generatorHelper from '@prisma/generator-helper';

const { generatorHandler } = generatorHelper;

import { generate } from './generate.ts';

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
