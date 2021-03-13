import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DateTimeFieldUpdateOperationsInput {
    @Field(() => Date, { nullable: true })
    set?: Date | string;
}
