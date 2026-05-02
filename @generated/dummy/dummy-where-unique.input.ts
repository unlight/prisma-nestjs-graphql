import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DummyWhereInput } from './dummy-where.input.ts';
import { Type } from 'class-transformer';
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
export class DummyWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => [DummyWhereInput], { nullable: true })
  @Type(() => DummyWhereInput)
  AND?: Array<DummyWhereInput>;

  @Field(() => [DummyWhereInput], { nullable: true })
  @Type(() => DummyWhereInput)
  OR?: Array<DummyWhereInput>;

  @Field(() => [DummyWhereInput], { nullable: true })
  @Type(() => DummyWhereInput)
  NOT?: Array<DummyWhereInput>;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date?: DateTimeNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  int?: IntNullableFilter;

  @Field(() => FloatNullableFilter, { nullable: true })
  float?: FloatNullableFilter;

  @Field(() => BytesNullableFilter, { nullable: true })
  bytes?: BytesNullableFilter;

  @Field(() => DecimalFilter, { nullable: true })
  @Type(() => DecimalFilter)
  decimal?: DecimalFilter;

  @Field(() => DecimalNullableListFilter, { nullable: true })
  @Type(() => DecimalNullableListFilter)
  decimals?: DecimalNullableListFilter;

  @Field(() => BigIntNullableFilter, { nullable: true })
  bigInt?: BigIntNullableFilter;

  @Field(() => JsonNullableFilter, { nullable: true })
  json?: JsonNullableFilter;

  @Field(() => StringNullableListFilter, { nullable: true })
  friends?: StringNullableListFilter;
}
