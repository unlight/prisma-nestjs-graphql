import { DMMF } from '../types';

export function getWhereUniqueAtLeastKeys(model: DMMF.Model) {
  const names = model.fields
    .filter(field => field.isUnique || field.isId)
    .map(field => field.name);

  if (model.primaryKey) {
    names.push(createFieldName(model.primaryKey));
  }

  for (const uniqueIndex of model.uniqueIndexes) {
    names.push(createFieldName(uniqueIndex));
  }

  return names;
}

function createFieldName(args: { name?: string | null; fields: string[] }) {
  const { name, fields } = args;

  return name || fields.join('_');
}
