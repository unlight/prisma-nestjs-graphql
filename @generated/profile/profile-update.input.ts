import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { UserUpdateOneRequiredWithoutProfileNestedInput } from '../user/user-update-one-required-without-profile-nested.input.ts';
import { Type } from 'class-transformer';

@InputType()
export class ProfileUpdateInput {
  @Field(() => String, { nullable: true })
  dummy?: string;

  @Field(() => UserUpdateOneRequiredWithoutProfileNestedInput, {
    nullable: true,
  })
  @Type(() => UserUpdateOneRequiredWithoutProfileNestedInput)
  user?: Identity<UserUpdateOneRequiredWithoutProfileNestedInput>;
}
