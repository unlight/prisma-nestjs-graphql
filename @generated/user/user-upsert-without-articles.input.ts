import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutArticlesInput } from './user-update-without-articles.input';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';

@InputType()
export class UserUpsertWithoutArticlesInput {
  @Field(() => UserUpdateWithoutArticlesInput, { nullable: false })
  update!: UserUpdateWithoutArticlesInput;

  @Field(() => UserCreateWithoutArticlesInput, { nullable: false })
  create!: UserCreateWithoutArticlesInput;
}
