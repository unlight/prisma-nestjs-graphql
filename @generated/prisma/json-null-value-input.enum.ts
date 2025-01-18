import { registerEnumType } from '@nestjs/graphql';

export enum JsonNullValueInput {
  JsonNull = 'JsonNull',
}

registerEnumType(JsonNullValueInput, {
  name: 'JsonNullValueInput',
  description: undefined,
});
