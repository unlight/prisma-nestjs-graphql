import { registerEnumType } from '@nestjs/graphql';

export enum DummyScalarFieldEnum {
  id = 'id',
  date = 'date',
  int = 'int',
  float = 'float',
  bytes = 'bytes',
  decimal = 'decimal',
  decimals = 'decimals',
  bigInt = 'bigInt',
  json = 'json',
  jsonDefault = 'jsonDefault',
  friends = 'friends',
}

registerEnumType(DummyScalarFieldEnum, {
  name: 'DummyScalarFieldEnum',
  description: undefined,
});
