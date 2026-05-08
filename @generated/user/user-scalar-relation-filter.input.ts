import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { UserWhereInput } from './user-where.input.ts';
import { Type } from 'class-transformer';

@InputType()
export class UserScalarRelationFilter {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  is?: Identity<UserWhereInput>;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  isNot?: Identity<UserWhereInput>;
}
