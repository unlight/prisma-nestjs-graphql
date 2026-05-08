import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { UserUpdateWithoutCommentsInput } from './user-update-without-comments.input.ts';
import { Type } from 'class-transformer';
import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input.ts';
import { UserWhereInput } from './user-where.input.ts';

@InputType()
export class UserUpsertWithoutCommentsInput {
  @Field(() => UserUpdateWithoutCommentsInput, { nullable: false })
  @Type(() => UserUpdateWithoutCommentsInput)
  update!: Identity<UserUpdateWithoutCommentsInput>;

  @Field(() => UserCreateWithoutCommentsInput, { nullable: false })
  @Type(() => UserCreateWithoutCommentsInput)
  create!: Identity<UserCreateWithoutCommentsInput>;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: Identity<UserWhereInput>;
}
