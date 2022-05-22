import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { BytesNullableWithAggregatesFilter } from '../prisma/bytes-nullable-with-aggregates-filter.input';
import { DecimalNullableWithAggregatesFilter } from '../prisma/decimal-nullable-with-aggregates-filter.input';
import { Type } from 'class-transformer';
import { DecimalNullableListFilter } from '../prisma/decimal-nullable-list-filter.input';
import { BigIntNullableWithAggregatesFilter } from '../prisma/big-int-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class DummyScalarWhereWithAggregatesInput {
  @Field(() => [DummyScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<DummyScalarWhereWithAggregatesInput>;

  @Field(() => [DummyScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<DummyScalarWhereWithAggregatesInput>;

  @Field(() => [DummyScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<DummyScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  date?: DateTimeNullableWithAggregatesFilter;

  @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  int?: IntNullableWithAggregatesFilter;

  @Field(() => FloatNullableWithAggregatesFilter, { nullable: true })
  float?: FloatNullableWithAggregatesFilter;

  @Field(() => BytesNullableWithAggregatesFilter, { nullable: true })
  bytes?: BytesNullableWithAggregatesFilter;

  @Field(() => DecimalNullableWithAggregatesFilter, { nullable: true })
  @Type(() => DecimalNullableWithAggregatesFilter)
  decimal?: DecimalNullableWithAggregatesFilter;

  @Field(() => DecimalNullableListFilter, { nullable: true })
  @Type(() => DecimalNullableListFilter)
  decimals?: DecimalNullableListFilter;

  @Field(() => BigIntNullableWithAggregatesFilter, { nullable: true })
  bigInt?: BigIntNullableWithAggregatesFilter;

  @Field(() => JsonNullableWithAggregatesFilter, { nullable: true })
  json?: JsonNullableWithAggregatesFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  friends?: StringNullableListFilter;
}
