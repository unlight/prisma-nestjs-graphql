import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { UserScalarWhereInput } from './user-scalar-where.input.ts';
import { Type } from 'class-transformer';
import { UserUpdateManyMutationInput } from './user-update-many-mutation.input.ts';

@InputType()
export class UserUpdateManyWithWhereWithoutFavoriteArticlesInput {
  @Field(() => UserScalarWhereInput, { nullable: false })
  @Type(() => UserScalarWhereInput)
  where!: Identity<UserScalarWhereInput>;

  @Field(() => UserUpdateManyMutationInput, { nullable: false })
  @Type(() => UserUpdateManyMutationInput)
  data!: Identity<UserUpdateManyMutationInput>;
}
