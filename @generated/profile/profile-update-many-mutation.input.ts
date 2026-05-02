import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input.ts';

@InputType()
export class ProfileUpdateManyMutationInput {
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  dummy?: NullableStringFieldUpdateOperationsInput;
}
