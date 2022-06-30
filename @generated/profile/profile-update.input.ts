import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutProfileNestedInput } from '../user/user-update-one-required-without-profile-nested.input';
import { Type } from 'class-transformer';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class ProfileUpdateInput {
  @Field(() => UserUpdateOneRequiredWithoutProfileNestedInput, { nullable: true })
  @Type(() => UserUpdateOneRequiredWithoutProfileNestedInput)
  user?: UserUpdateOneRequiredWithoutProfileNestedInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  dummy?: NullableStringFieldUpdateOperationsInput;
}
