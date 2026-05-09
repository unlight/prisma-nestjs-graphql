import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { StringFilter } from '../prisma/string-filter.input.ts';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input.ts';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input.ts';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input.ts';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input.ts';
import { EnumRoleNullableFilter } from '../prisma/enum-role-nullable-filter.input.ts';

@InputType()
export class UserScalarWhereInput {
  @Field(() => [UserScalarWhereInput], { nullable: true })
  @Type(() => UserScalarWhereInput)
  AND?: Array<UserScalarWhereInput>;

  @Field(() => [UserScalarWhereInput], { nullable: true })
  @Type(() => UserScalarWhereInput)
  OR?: Array<UserScalarWhereInput>;

  @Field(() => [UserScalarWhereInput], { nullable: true })
  @Type(() => UserScalarWhereInput)
  NOT?: Array<UserScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: Identity<StringFilter>;

  @Field(() => StringFilter, { nullable: true })
  email?: Identity<StringFilter>;

  @Field(() => StringFilter, { nullable: true })
  name?: Identity<StringFilter>;

  @Field(() => StringFilter, { nullable: true })
  password?: Identity<StringFilter>;

  @Field(() => StringNullableFilter, { nullable: true })
  bio?: Identity<StringNullableFilter>;

  @Field(() => StringNullableFilter, { nullable: true })
  image?: Identity<StringNullableFilter>;

  @Field(() => IntNullableFilter, { nullable: true })
  countComments?: Identity<IntNullableFilter>;

  @Field(() => FloatNullableFilter, { nullable: true })
  rating?: Identity<FloatNullableFilter>;

  @Field(() => DecimalNullableFilter, { nullable: true })
  @Type(() => DecimalNullableFilter)
  money?: Identity<DecimalNullableFilter>;

  @Field(() => EnumRoleNullableFilter, { nullable: true })
  role?: Identity<EnumRoleNullableFilter>;
}
