export function isCreateManyReturn(name: string): boolean {
  const lowerName = name.toLowerCase();
  if (
    lowerName.startsWith('createmany') &&
    (lowerName.endsWith('andreturnoutputtype') || lowerName.endsWith('andreturn'))
  ) {
    return true;
  }

  return false;
}
