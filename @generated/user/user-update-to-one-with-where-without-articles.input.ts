import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { UserWhereInput } from './user-where.input.ts';
import { Type } from 'class-transformer';
import { UserUpdateWithoutArticlesInput } from './user-update-without-articles.input.ts';

@InputType()
export class UserUpdateToOneWithWhereWithoutArticlesInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: Identity<UserWhereInput>;

  @Field(() => UserUpdateWithoutArticlesInput, { nullable: false })
  @Type(() => UserUpdateWithoutArticlesInput)
  data!: Identity<UserUpdateWithoutArticlesInput>;
}
