import { registerEnumType } from '@nestjs/graphql';

export enum NullableJsonNullValueInput {
    DatabaseNull = 'DbNull',
    JsonNull = 'JsonNull',
}

registerEnumType(NullableJsonNullValueInput, {
    name: 'NullableJsonNullValueInput',
    description: undefined,
});
