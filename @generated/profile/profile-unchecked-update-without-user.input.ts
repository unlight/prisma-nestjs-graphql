import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class ProfileUncheckedUpdateWithoutUserInput {

    @Field(() => IntFieldUpdateOperationsInput, {deprecationReason:'Use new name instead',nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    dummy?: NullableStringFieldUpdateOperationsInput;
}
