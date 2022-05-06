import { ObjectSettings } from '../types';

export function createComment(documentation: string, settings?: ObjectSettings) {
  const documentationLines = documentation.split('\n');
  const commentLines = ['/**'];

  for (const line of documentationLines) {
    commentLines.push(` * ${line}`);
  }

  const deprecationReason = settings?.fieldArguments()?.deprecationReason as string;

  if (deprecationReason) {
    commentLines.push(` * @deprecated ${deprecationReason}`);
  }

  commentLines.push(' */\n');

  return commentLines.join('\n');
}
