import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { StringFilter } from '../prisma/string-filter.input.ts';
import { IntFilter } from '../prisma/int-filter.input.ts';
import { FloatFilter } from '../prisma/float-filter.input.ts';
import { DecimalFilter } from '../prisma/decimal-filter.input.ts';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input.ts';

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

  @Field(() => StringFilter, { nullable: true })
  bio?: Identity<StringFilter>;

  @Field(() => StringFilter, { nullable: true })
  image?: Identity<StringFilter>;

  @Field(() => IntFilter, { nullable: true })
  countComments?: Identity<IntFilter>;

  @Field(() => FloatFilter, { nullable: true })
  rating?: Identity<FloatFilter>;

  @Field(() => DecimalFilter, { nullable: true })
  @Type(() => DecimalFilter)
  money?: Identity<DecimalFilter>;

  @Field(() => EnumRoleFilter, { nullable: true })
  role?: Identity<EnumRoleFilter>;
}
