import { registerEnumType } from '@nestjs/graphql';

export enum DummyDistinctFieldEnum {
    id = 'id',
    bytes = 'bytes',
    decimal = 'decimal',
    bigInt = 'bigInt',
    json = 'json',
}

registerEnumType(DummyDistinctFieldEnum, { name: 'DummyDistinctFieldEnum' });
