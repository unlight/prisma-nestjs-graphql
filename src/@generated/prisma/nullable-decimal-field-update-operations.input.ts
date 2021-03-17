import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NullableDecimalFieldUpdateOperationsInput {
    @Field(() => String, { nullable: true })
    set?: number | string;

    @Field(() => String, { nullable: true })
    increment?: number | string;

    @Field(() => String, { nullable: true })
    decrement?: number | string;

    @Field(() => String, { nullable: true })
    multiply?: number | string;

    @Field(() => String, { nullable: true })
    divide?: number | string;
}
