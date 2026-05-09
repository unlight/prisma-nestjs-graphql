import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input.ts';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input.ts';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input.ts';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input.ts';
import { BytesNullableWithAggregatesFilter } from '../prisma/bytes-nullable-with-aggregates-filter.input.ts';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input.ts';
import { DecimalNullableListFilter } from '../prisma/decimal-nullable-list-filter.input.ts';
import { BigIntNullableWithAggregatesFilter } from '../prisma/big-int-nullable-with-aggregates-filter.input.ts';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input.ts';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input.ts';

@InputType()
export class DummyScalarWhereWithAggregatesInput {
  @Field(() => [DummyScalarWhereWithAggregatesInput], { nullable: true })
  @Type(() => DummyScalarWhereWithAggregatesInput)
  AND?: Array<DummyScalarWhereWithAggregatesInput>;

  @Field(() => [DummyScalarWhereWithAggregatesInput], { nullable: true })
  @Type(() => DummyScalarWhereWithAggregatesInput)
  OR?: Array<DummyScalarWhereWithAggregatesInput>;

  @Field(() => [DummyScalarWhereWithAggregatesInput], { nullable: true })
  @Type(() => DummyScalarWhereWithAggregatesInput)
  NOT?: Array<DummyScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: Identity<StringWithAggregatesFilter>;

  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  date?: Identity<DateTimeNullableWithAggregatesFilter>;

  @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  int?: Identity<IntNullableWithAggregatesFilter>;

  @Field(() => FloatNullableWithAggregatesFilter, { nullable: true })
  float?: Identity<FloatNullableWithAggregatesFilter>;

  @Field(() => BytesNullableWithAggregatesFilter, { nullable: true })
  bytes?: Identity<BytesNullableWithAggregatesFilter>;

  @Field(() => DecimalWithAggregatesFilter, { nullable: true })
  @Type(() => DecimalWithAggregatesFilter)
  decimal?: Identity<DecimalWithAggregatesFilter>;

  @Field(() => DecimalNullableListFilter, { nullable: true })
  @Type(() => DecimalNullableListFilter)
  decimals?: Identity<DecimalNullableListFilter>;

  @Field(() => BigIntNullableWithAggregatesFilter, { nullable: true })
  bigInt?: Identity<BigIntNullableWithAggregatesFilter>;

  @Field(() => JsonNullableWithAggregatesFilter, { nullable: true })
  json?: Identity<JsonNullableWithAggregatesFilter>;

  @Field(() => StringNullableListFilter, { nullable: true })
  friends?: Identity<StringNullableListFilter>;
}
