import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateInput } from './user-create.input';
import { UserUpdateInput } from './user-update.input';

@ArgsType()
export class UpsertOneUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateInput, { nullable: false })
  create!: UserCreateInput;

  @Field(() => UserUpdateInput, { nullable: false })
  update!: UserUpdateInput;
}
