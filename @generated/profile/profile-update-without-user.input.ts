import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input.ts';

@InputType()
export class ProfileUpdateWithoutUserInput {
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  dummy?: Identity<NullableStringFieldUpdateOperationsInput>;
}
