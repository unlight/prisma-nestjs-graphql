import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutArticlesInput } from './user-update-without-articles.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutArticlesInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;

  @Field(() => UserUpdateWithoutArticlesInput, { nullable: false })
  @Type(() => UserUpdateWithoutArticlesInput)
  data!: UserUpdateWithoutArticlesInput;
}
