import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class ProfileWhereUniqueInput {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  userId!: string;

  @Field(() => [ProfileWhereInput], { nullable: true })
  AND?: Array<ProfileWhereInput>;

  @Field(() => [ProfileWhereInput], { nullable: true })
  OR?: Array<ProfileWhereInput>;

  @Field(() => [ProfileWhereInput], { nullable: true })
  NOT?: Array<ProfileWhereInput>;

  @Field(() => StringNullableFilter, { nullable: true })
  dummy?: StringNullableFilter;

  @Field(() => UserRelationFilter, { nullable: true })
  @Type(() => UserRelationFilter)
  user?: UserRelationFilter;
}
