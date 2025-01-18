export function isManyAndReturnOutputType(name: string): boolean {
  const lowerName = name.toLowerCase();
  if (
    (lowerName.startsWith('createmany') || lowerName.startsWith('updatemany')) &&
    (lowerName.endsWith('andreturnoutputtype') || lowerName.endsWith('andreturn'))
  ) {
    return true;
  }

  return false;
}
