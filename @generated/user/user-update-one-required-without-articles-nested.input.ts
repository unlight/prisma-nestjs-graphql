import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutArticlesInput } from './user-create-or-connect-without-articles.input';
import { UserUpsertWithoutArticlesInput } from './user-upsert-without-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutArticlesInput } from './user-update-without-articles.input';

@InputType()
export class UserUpdateOneRequiredWithoutArticlesNestedInput {
  @Field(() => UserCreateWithoutArticlesInput, { nullable: true })
  @Type(() => UserCreateWithoutArticlesInput)
  create?: UserCreateWithoutArticlesInput;

  @Field(() => UserCreateOrConnectWithoutArticlesInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutArticlesInput)
  connectOrCreate?: UserCreateOrConnectWithoutArticlesInput;

  @Field(() => UserUpsertWithoutArticlesInput, { nullable: true })
  @Type(() => UserUpsertWithoutArticlesInput)
  upsert?: UserUpsertWithoutArticlesInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: UserWhereUniqueInput;

  @Field(() => UserUpdateWithoutArticlesInput, { nullable: true })
  @Type(() => UserUpdateWithoutArticlesInput)
  update?: UserUpdateWithoutArticlesInput;
}
