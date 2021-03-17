import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class StringFieldUpdateOperationsInput {
    @Field(() => String, { nullable: true })
    set?: string;
}
