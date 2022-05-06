export function warning(messages: string[]): void;
export function warning(message: string | string[]): void {
  if (Array.isArray(message)) {
    console.log('prisma-nestjs-graphql:');
    console.log(message.join('\n'));
  } else {
    console.log('prisma-nestjs-graphql:', message);
  }
}
