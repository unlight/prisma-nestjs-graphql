import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';
import { UserCreateOrConnectWithoutArticlesInput } from './user-create-or-connect-without-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutArticlesInput {
  @Field(() => UserCreateWithoutArticlesInput, { nullable: true })
  create?: UserCreateWithoutArticlesInput;

  @Field(() => UserCreateOrConnectWithoutArticlesInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutArticlesInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput;
}
