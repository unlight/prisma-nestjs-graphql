import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutProfileInput } from './user-update-without-profile.input';
import { UserCreateWithoutProfileInput } from './user-create-without-profile.input';

@InputType()
export class UserUpsertWithoutProfileInput {
  @Field(() => UserUpdateWithoutProfileInput, { nullable: false })
  update!: UserUpdateWithoutProfileInput;

  @Field(() => UserCreateWithoutProfileInput, { nullable: false })
  create!: UserCreateWithoutProfileInput;
}
