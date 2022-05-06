import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileUpdateWithoutUserInput } from './profile-update-without-user.input';
import { ProfileCreateWithoutUserInput } from './profile-create-without-user.input';

@InputType()
export class ProfileUpsertWithoutUserInput {
  @Field(() => ProfileUpdateWithoutUserInput, { nullable: false })
  update!: ProfileUpdateWithoutUserInput;

  @Field(() => ProfileCreateWithoutUserInput, { nullable: false })
  create!: ProfileCreateWithoutUserInput;
}
