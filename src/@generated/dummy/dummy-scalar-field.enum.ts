import { registerEnumType } from '@nestjs/graphql';

export enum DummyScalarFieldEnum {
  id = 'id',
  bytes = 'bytes',
  decimal = 'decimal',
  bigInt = 'bigInt',
  json = 'json',
}

registerEnumType(DummyScalarFieldEnum, { name: 'DummyScalarFieldEnum' });
