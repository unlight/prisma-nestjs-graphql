import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input';
import { UserCreateOrConnectWithoutCommentsInput } from './user-create-or-connect-without-comments.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCommentsInput {
  @Field(() => UserCreateWithoutCommentsInput, { nullable: true })
  create?: UserCreateWithoutCommentsInput;

  @Field(() => UserCreateOrConnectWithoutCommentsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutCommentsInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput;
}
