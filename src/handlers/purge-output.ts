import fs from 'graceful-fs';

import type { EventArguments, TAwaitEventEmitter } from '../types.ts';

export function purgeOutput(emitter: TAwaitEventEmitter) {
  emitter.on('Begin', begin);
  emitter.on('End', end);
}

function begin({ output, project }: EventArguments) {
  const sourceFiles = project.getDirectory(output)?.getDescendantSourceFiles();

  if (sourceFiles) {
    for (const sourceFile of sourceFiles) {
      sourceFile.delete();
    }
  }
}

function end({ output, project }: EventArguments) {
  const directories = project
    .getDirectory(output)
    ?.getDescendantDirectories()
    .filter(directory => directory.getSourceFiles().length === 0)
    .map(directory => directory.getPath());

  for (const directory of directories || []) {
    try {
      fs.rmdirSync(directory);
      // eslint-disable-next-line no-empty
    } catch {}
  }
}
