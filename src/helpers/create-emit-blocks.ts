type EmittedBlockType =
  | 'prismaEnums'
  | 'schemaEnums'
  | 'models'
  | 'inputs'
  | 'args'
  | 'outputs';

export type EmitBlocksOption = 'enums' | 'models' | 'inputs' | 'args' | 'outputs';

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

export function createEmitBlocks(data?: string[]): Record<EmittedBlockType, boolean> {
  if (!data) {
    return Object.fromEntries(allEmmittedBlocks.map(block => [block, true])) as Record<
      EmittedBlockType,
      boolean
    >;
  }

  let blocksToEmit = {} as Record<EmittedBlockType, boolean>;

  for (const block of data) {
    if (!Object.keys(blocksDependencyMap).includes(block as any)) continue;

    blocksToEmit = {
      ...blocksToEmit,
      ...Object.fromEntries(
        (blocksDependencyMap[block] as EmittedBlockType[]).map(block => [block, true]),
      ),
    };
  }

  return blocksToEmit;
}
