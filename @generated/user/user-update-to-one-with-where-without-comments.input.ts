import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { UserWhereInput } from './user-where.input.ts';
import { Type } from 'class-transformer';
import { UserUpdateWithoutCommentsInput } from './user-update-without-comments.input.ts';

@InputType()
export class UserUpdateToOneWithWhereWithoutCommentsInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: Identity<UserWhereInput>;

  @Field(() => UserUpdateWithoutCommentsInput, { nullable: false })
  @Type(() => UserUpdateWithoutCommentsInput)
  data!: Identity<UserUpdateWithoutCommentsInput>;
}
