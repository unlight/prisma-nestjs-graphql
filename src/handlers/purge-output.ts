import AwaitEventEmitter from 'await-event-emitter';
import { rmdirSync } from 'graceful-fs';

import { EventArguments } from '../types';

export function purgeOutput(emitter: AwaitEventEmitter) {
  emitter.on('Begin', begin);
  emitter.on('End', end);
}

function begin({ project, output }: EventArguments) {
  const sourceFiles = project.getDirectory(output)?.getDescendantSourceFiles();

  if (sourceFiles) {
    for (const sourceFile of sourceFiles) {
      sourceFile.delete();
    }
  }
}

function end({ project, output }: EventArguments) {
  const directories = project
    .getDirectory(output)
    ?.getDescendantDirectories()
    .filter(directory => directory.getSourceFiles().length === 0)
    .map(directory => directory.getPath());

  for (const directory of directories || []) {
    try {
      rmdirSync(directory);
      // eslint-disable-next-line no-empty
    } catch {}
  }
}
