import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input.ts';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input.ts';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input.ts';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input.ts';
import { EnumRoleWithAggregatesFilter } from '../prisma/enum-role-with-aggregates-filter.input.ts';

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

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  bio?: Identity<StringWithAggregatesFilter>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  image?: Identity<StringWithAggregatesFilter>;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  countComments?: Identity<IntWithAggregatesFilter>;

  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  rating?: Identity<FloatWithAggregatesFilter>;

  @Field(() => DecimalWithAggregatesFilter, { nullable: true })
  @Type(() => DecimalWithAggregatesFilter)
  money?: Identity<DecimalWithAggregatesFilter>;

  @Field(() => EnumRoleWithAggregatesFilter, { nullable: true })
  role?: Identity<EnumRoleWithAggregatesFilter>;
}
