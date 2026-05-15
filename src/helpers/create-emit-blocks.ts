import type { EmitBlocksOption, EmittedBlockType } from '../types.ts';

const allEmmittedBlocks: EmittedBlockType[] = [
  'prismaEnums',
  'schemaEnums',
  'models',
  'inputs',
  'args',
  'outputs',
];

const blocksDependencyMap: Record<EmitBlocksOption, EmittedBlockType[]> = {
  args: ['args', 'inputs', 'prismaEnums'],
  enums: ['schemaEnums', 'prismaEnums'],
  inputs: ['inputs', 'prismaEnums'],
  models: ['models', 'schemaEnums'],
  outputs: ['outputs'],
};

export function createEmitBlocks(
  data?: unknown,
): Record<EmittedBlockType, boolean> {
  if (!Array.isArray(data)) {
    return Object.fromEntries(
      allEmmittedBlocks.map(block => [block, true]),
    ) as Record<EmittedBlockType, boolean>;
  }

  let blocksToEmit = {} as Record<EmittedBlockType, boolean>;

  for (const block of data) {
    if (typeof block !== 'string') continue;
    if (!Object.keys(blocksDependencyMap).includes(block)) continue;

    blocksToEmit = {
      ...blocksToEmit,
      ...Object.fromEntries(
        blocksDependencyMap[block].map(block => [block, true]),
      ),
    };
  }

  return blocksToEmit;
}
