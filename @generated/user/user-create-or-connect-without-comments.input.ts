import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input';

@InputType()
export class UserCreateOrConnectWithoutCommentsInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutCommentsInput, { nullable: false })
  create!: UserCreateWithoutCommentsInput;
}
