import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { StringFilter } from '../prisma/string-filter.input.ts';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input.ts';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input.ts';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input.ts';
import { BytesNullableFilter } from '../prisma/bytes-nullable-filter.input.ts';
import { DecimalFilter } from '../prisma/decimal-filter.input.ts';
import { DecimalNullableListFilter } from '../prisma/decimal-nullable-list-filter.input.ts';
import { BigIntNullableFilter } from '../prisma/big-int-nullable-filter.input.ts';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input.ts';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input.ts';

@InputType()
export class DummyWhereInput {
  @Field(() => [DummyWhereInput], { nullable: true })
  @Type(() => DummyWhereInput)
  AND?: Array<DummyWhereInput>;

  @Field(() => [DummyWhereInput], { nullable: true })
  @Type(() => DummyWhereInput)
  OR?: Array<DummyWhereInput>;

  @Field(() => [DummyWhereInput], { nullable: true })
  @Type(() => DummyWhereInput)
  NOT?: Array<DummyWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: Identity<StringFilter>;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date?: Identity<DateTimeNullableFilter>;

  @Field(() => IntNullableFilter, { nullable: true })
  int?: Identity<IntNullableFilter>;

  @Field(() => FloatNullableFilter, { nullable: true })
  float?: Identity<FloatNullableFilter>;

  @Field(() => BytesNullableFilter, { nullable: true })
  bytes?: Identity<BytesNullableFilter>;

  @Field(() => DecimalFilter, { nullable: true })
  @Type(() => DecimalFilter)
  decimal?: Identity<DecimalFilter>;

  @Field(() => DecimalNullableListFilter, { nullable: true })
  @Type(() => DecimalNullableListFilter)
  decimals?: Identity<DecimalNullableListFilter>;

  @Field(() => BigIntNullableFilter, { nullable: true })
  bigInt?: Identity<BigIntNullableFilter>;

  @Field(() => JsonNullableFilter, { nullable: true })
  json?: Identity<JsonNullableFilter>;

  @Field(() => StringNullableListFilter, { nullable: true })
  friends?: Identity<StringNullableListFilter>;
}
