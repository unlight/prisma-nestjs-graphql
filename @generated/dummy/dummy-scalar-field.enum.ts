import { registerEnumType } from '@nestjs/graphql';

export enum DummyScalarFieldEnum {
  id = 'id',
  created = 'created',
  floaty = 'floaty',
  int = 'int',
  float = 'float',
  bytes = 'bytes',
  decimal = 'decimal',
  bigInt = 'bigInt',
  json = 'json',
  friends = 'friends',
}

registerEnumType(DummyScalarFieldEnum, {
  name: 'DummyScalarFieldEnum',
  description: undefined,
});
