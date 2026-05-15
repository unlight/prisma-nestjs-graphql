import outmatch from 'outmatch';

import type { InputTypeRef } from '../types.ts';

export function findByPattern(
  fieldInputTypes: InputTypeRef[],
  pattern: string,
) {
  if (pattern.startsWith('matcher:') || pattern.startsWith('match:')) {
    const { 1: patternValue } = pattern.split(':', 2);
    const isMatch = outmatch(patternValue, { separator: false });
    const result = fieldInputTypes.find(x => isMatch(x.type));
    if (result) {
      return result;
    }
  }
  const result = fieldInputTypes.find(x => x.type.includes(pattern));
  if (result) {
    return result;
  }
}
