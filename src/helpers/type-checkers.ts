export function isWhereUniqueInputType(name: string) {
  return name.endsWith('WhereUniqueInput');
}

export function isManyAndReturnOutputType(name: string): boolean {
  const lowerName = name.toLowerCase();
  if (
    (lowerName.startsWith('createmany') ||
      lowerName.startsWith('updatemany')) &&
    (lowerName.endsWith('andreturnoutputtype') ||
      lowerName.endsWith('andreturn'))
  ) {
    return true;
  }

  return false;
}

export function isAggregateRelatedInputType(inputTypeName: string): boolean {
  return (
    inputTypeName.endsWith('AggregateInput') ||
    inputTypeName.endsWith('WithAggregationInput') ||
    inputTypeName.endsWith('WithAggregatesInput') ||
    inputTypeName.endsWith('WithAggregatesFilter')
  );
}
