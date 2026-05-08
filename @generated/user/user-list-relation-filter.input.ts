import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { UserWhereInput } from './user-where.input.ts';
import { Type } from 'class-transformer';

@InputType()
export class UserListRelationFilter {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  every?: Identity<UserWhereInput>;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  some?: Identity<UserWhereInput>;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  none?: Identity<UserWhereInput>;
}
