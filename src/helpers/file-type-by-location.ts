import type { FieldLocation } from '../types.ts';

export function fileTypeByLocation(fieldLocation: FieldLocation) {
  switch (fieldLocation) {
    case 'inputObjectTypes': {
      return 'input';
    }
    case 'outputObjectTypes': {
      return 'output';
    }
    case 'enumTypes': {
      return 'enum';
    }
  }
  return 'object';
}
