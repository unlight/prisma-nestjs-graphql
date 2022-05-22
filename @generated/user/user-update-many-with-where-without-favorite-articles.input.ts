import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserScalarWhereInput } from './user-scalar-where.input';
import { Type } from 'class-transformer';
import { UserUpdateManyMutationInput } from './user-update-many-mutation.input';

@InputType()
export class UserUpdateManyWithWhereWithoutFavoriteArticlesInput {
  @Field(() => UserScalarWhereInput, { nullable: false })
  @Type(() => UserScalarWhereInput)
  where!: UserScalarWhereInput;

  @Field(() => UserUpdateManyMutationInput, { nullable: false })
  @Type(() => UserUpdateManyMutationInput)
  data!: UserUpdateManyMutationInput;
}
