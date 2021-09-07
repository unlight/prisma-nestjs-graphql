import { registerEnumType } from '@nestjs/graphql';

export enum JsonNullValueFilter {
    DatabaseNull = 'DbNull',
    JsonNull = 'JsonNull',
    AnyNull = 'AnyNull',
}

registerEnumType(JsonNullValueFilter, {
    name: 'JsonNullValueFilter',
    description: undefined,
});
