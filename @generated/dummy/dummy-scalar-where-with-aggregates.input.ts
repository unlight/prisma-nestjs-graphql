import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input.ts';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input.ts';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input.ts';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input.ts';
import { BytesWithAggregatesFilter } from '../prisma/bytes-with-aggregates-filter.input.ts';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input.ts';
import { DecimalListFilter } from '../prisma/decimal-list-filter.input.ts';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input.ts';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input.ts';
import { StringListFilter } from '../prisma/string-list-filter.input.ts';

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

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  date?: Identity<DateTimeWithAggregatesFilter>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  int?: Identity<IntWithAggregatesFilter>;

  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  float?: Identity<FloatWithAggregatesFilter>;

  @Field(() => BytesWithAggregatesFilter, { nullable: true })
  bytes?: Identity<BytesWithAggregatesFilter>;

  @Field(() => DecimalWithAggregatesFilter, { nullable: true })
  @Type(() => DecimalWithAggregatesFilter)
  decimal?: Identity<DecimalWithAggregatesFilter>;

  @Field(() => DecimalListFilter, { nullable: true })
  @Type(() => DecimalListFilter)
  decimals?: Identity<DecimalListFilter>;

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  bigInt?: Identity<BigIntWithAggregatesFilter>;

  @Field(() => JsonWithAggregatesFilter, { nullable: true })
  json?: Identity<JsonWithAggregatesFilter>;

  @Field(() => StringListFilter, { nullable: true })
  friends?: Identity<StringListFilter>;
}
