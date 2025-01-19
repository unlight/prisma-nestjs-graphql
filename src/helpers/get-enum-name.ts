export function getEnumName(referenceName: string) {
  // `${Role}`
  return referenceName.slice(3, -2);
}
