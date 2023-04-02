import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutProfileNestedInput } from '../user/user-update-one-required-without-profile-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class ProfileUpdateInput {
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  dummy?: NullableStringFieldUpdateOperationsInput;

  @Field(() => UserUpdateOneRequiredWithoutProfileNestedInput, { nullable: true })
  @Type(() => UserUpdateOneRequiredWithoutProfileNestedInput)
  user?: UserUpdateOneRequiredWithoutProfileNestedInput;
}
