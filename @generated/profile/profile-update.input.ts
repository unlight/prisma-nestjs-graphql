import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutProfileInput } from '../user/user-update-one-required-without-profile.input';
import { Type } from 'class-transformer';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class ProfileUpdateInput {
  @Field(() => UserUpdateOneRequiredWithoutProfileInput, { nullable: true })
  @Type(() => UserUpdateOneRequiredWithoutProfileInput)
  user?: UserUpdateOneRequiredWithoutProfileInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  dummy?: NullableStringFieldUpdateOperationsInput;
}
