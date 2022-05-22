export function isListInput(typeName: string, model: string) {
  return typeName.startsWith(`${model}Create`) || typeName.startsWith(`${model}Update`);
}
