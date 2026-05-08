import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input.ts';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input.ts';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input.ts';

@InputType()
export class ProfileUncheckedUpdateInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: Identity<IntFieldUpdateOperationsInput>;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: Identity<StringFieldUpdateOperationsInput>;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  dummy?: Identity<NullableStringFieldUpdateOperationsInput>;
}
