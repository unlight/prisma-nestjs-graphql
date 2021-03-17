import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NullableBoolFieldUpdateOperationsInput {
    @Field(() => Boolean, { nullable: true })
    set?: boolean;
}
