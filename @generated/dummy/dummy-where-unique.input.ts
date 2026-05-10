import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DummyWhereInput } from './dummy-where.input.ts';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { DateTimeFilter } from '../prisma/date-time-filter.input.ts';
import { IntFilter } from '../prisma/int-filter.input.ts';
import { FloatFilter } from '../prisma/float-filter.input.ts';
import { BytesFilter } from '../prisma/bytes-filter.input.ts';
import { DecimalFilter } from '../prisma/decimal-filter.input.ts';
import { DecimalListFilter } from '../prisma/decimal-list-filter.input.ts';
import { BigIntFilter } from '../prisma/big-int-filter.input.ts';
import { JsonFilter } from '../prisma/json-filter.input.ts';
import { StringListFilter } from '../prisma/string-list-filter.input.ts';

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

  @Field(() => DateTimeFilter, { nullable: true })
  date?: Identity<DateTimeFilter>;

  @Field(() => IntFilter, { nullable: true })
  int?: Identity<IntFilter>;

  @Field(() => FloatFilter, { nullable: true })
  float?: Identity<FloatFilter>;

  @Field(() => BytesFilter, { nullable: true })
  bytes?: Identity<BytesFilter>;

  @Field(() => DecimalFilter, { nullable: true })
  @Type(() => DecimalFilter)
  decimal?: Identity<DecimalFilter>;

  @Field(() => DecimalListFilter, { nullable: true })
  @Type(() => DecimalListFilter)
  decimals?: Identity<DecimalListFilter>;

  @Field(() => BigIntFilter, { nullable: true })
  bigInt?: Identity<BigIntFilter>;

  @Field(() => JsonFilter, { nullable: true })
  json?: Identity<JsonFilter>;

  @Field(() => StringListFilter, { nullable: true })
  friends?: Identity<StringListFilter>;
}
