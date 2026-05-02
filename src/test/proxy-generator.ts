import generatorHelper from '@prisma/generator-helper';
import { ok } from 'assert';
import { writeFile } from 'fs/promises';

const { generatorHandler } = generatorHelper;

generatorHandler({
  async onGenerate(options) {
    const generatorOutput = options.generator.output?.value;
    ok(generatorOutput, 'Missing generator configuration: output');
    await writeFile(
      `${generatorOutput}/options-${options.generator.config.hash}.mjs`,
      `export default ${JSON.stringify(options, undefined, 2)}`,
    );
  },
  onManifest() {
    return {
      defaultOutput: '.',
      prettyName: 'proxy generator',
    };
  },
});
