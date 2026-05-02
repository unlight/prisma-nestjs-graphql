#!/usr/bin/env node

import generatorHelper from '@prisma/generator-helper';

const generatorHandlerConfig = await resoveGeneratorHandlerConfig();

generatorHelper.generatorHandler(generatorHandlerConfig);

async function resoveGeneratorHandlerConfig() {
  try {
    const { generatorHandlerConfig } =
      await import('./prisma-nestjs-graphql.mjs');
    return generatorHandlerConfig;
  } catch {
    // Do nothing
  }

  const { generatorHandlerConfig } = await import('./generate.ts');
  return generatorHandlerConfig;
}
