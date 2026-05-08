import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input.ts';
import type { Identity } from 'identity-type';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input.ts';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input.ts';
import { Type } from 'class-transformer';

@InputType()
export class ProfileWhereUniqueInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  userId?: string;

  @Field(() => [ProfileWhereInput], { nullable: true })
  AND?: Array<ProfileWhereInput>;

  @Field(() => [ProfileWhereInput], { nullable: true })
  OR?: Array<ProfileWhereInput>;

  @Field(() => [ProfileWhereInput], { nullable: true })
  NOT?: Array<ProfileWhereInput>;

  @Field(() => StringNullableFilter, { nullable: true })
  dummy?: Identity<StringNullableFilter>;

  @Field(() => UserScalarRelationFilter, { nullable: true })
  @Type(() => UserScalarRelationFilter)
  user?: Identity<UserScalarRelationFilter>;
}
