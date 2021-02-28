import { registerEnumType } from '@nestjs/graphql';

export enum DummyScalarFieldEnum {
    id = 'id',
    floaty = 'floaty',
    int = 'int',
    float = 'float',
    bytes = 'bytes',
    decimal = 'decimal',
    bigInt = 'bigInt',
    json = 'json',
}

registerEnumType(DummyScalarFieldEnum, { name: 'DummyScalarFieldEnum' });
