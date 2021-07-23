import { Field, InputType } from '@nestjs/graphql';

import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class ProfileUpdateWithoutUserInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
    dummy?: NullableStringFieldUpdateOperationsInput;
}
