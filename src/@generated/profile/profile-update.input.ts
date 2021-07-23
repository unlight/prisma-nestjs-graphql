import { Field, InputType } from '@nestjs/graphql';

import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutProfileInput } from '../user/user-update-one-required-without-profile.input';

@InputType()
export class ProfileUpdateInput {
    @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
    dummy?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutProfileInput, { nullable: true })
    user?: UserUpdateOneRequiredWithoutProfileInput;
}
