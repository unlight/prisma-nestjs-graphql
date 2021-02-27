import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NullableDecimalFieldUpdateOperationsInput {
    @Field(() => String, {
        nullable: true,
    })
    set?: string;

    @Field(() => String, {
        nullable: true,
    })
    increment?: string;

    @Field(() => String, {
        nullable: true,
    })
    decrement?: string;

    @Field(() => String, {
        nullable: true,
    })
    multiply?: string;

    @Field(() => String, {
        nullable: true,
    })
    divide?: string;
}
