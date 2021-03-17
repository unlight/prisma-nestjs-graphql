import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NullableStringFieldUpdateOperationsInput {
    @Field(() => String, { nullable: true })
    set?: string;
}
