import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input.ts';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input.ts';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input.ts';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input.ts';
import { Decimal } from '@prisma/client-runtime-utils';
import { DecimalNullableWithAggregatesFilter } from '../prisma/decimal-nullable-with-aggregates-filter.input.ts';
import { EnumRoleNullableWithAggregatesFilter } from '../prisma/enum-role-nullable-with-aggregates-filter.input.ts';

@InputType()
export class UserScalarWhereWithAggregatesInput {
  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  @Type(() => UserScalarWhereWithAggregatesInput)
  AND?: Array<UserScalarWhereWithAggregatesInput>;

  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  @Type(() => UserScalarWhereWithAggregatesInput)
  OR?: Array<UserScalarWhereWithAggregatesInput>;

  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  @Type(() => UserScalarWhereWithAggregatesInput)
  NOT?: Array<UserScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: Identity<StringWithAggregatesFilter>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  email?: Identity<StringWithAggregatesFilter>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: Identity<StringWithAggregatesFilter>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  password?: Identity<StringWithAggregatesFilter>;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  bio?: Identity<StringNullableWithAggregatesFilter>;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  image?: Identity<StringNullableWithAggregatesFilter>;

  @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  countComments?: Identity<IntNullableWithAggregatesFilter>;

  @Field(() => FloatNullableWithAggregatesFilter, { nullable: true })
  rating?: Identity<FloatNullableWithAggregatesFilter>;

  @Field(() => DecimalNullableWithAggregatesFilter, { nullable: true })
  @Type(() => DecimalNullableWithAggregatesFilter)
  money?: Identity<DecimalNullableWithAggregatesFilter>;

  @Field(() => EnumRoleNullableWithAggregatesFilter, { nullable: true })
  role?: Identity<EnumRoleNullableWithAggregatesFilter>;
}
