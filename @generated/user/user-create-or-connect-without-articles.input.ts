import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutArticlesInput } from './user-create-without-articles.input';

@InputType()
export class UserCreateOrConnectWithoutArticlesInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutArticlesInput, { nullable: false })
  @Type(() => UserCreateWithoutArticlesInput)
  create!: UserCreateWithoutArticlesInput;
}
