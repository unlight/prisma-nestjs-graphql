import { DMMF } from '../types';

export function getWhereUniqueAtLeastKeys(model: DMMF.Model) {
  const names = model.fields
    .filter(field => field.isUnique || field.isId)
    .map(field => field.name);

  for (const uniqueIndex of model.uniqueIndexes) {
    const name = uniqueIndex.name || uniqueIndex.fields.join('_');

    names.push(name);
  }

  return names.map(name => `'${name}'`).join(' | ');
}
