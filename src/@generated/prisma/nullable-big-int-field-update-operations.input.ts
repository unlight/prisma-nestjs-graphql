import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NullableBigIntFieldUpdateOperationsInput {
    @Field(() => String, {
        nullable: true,
    })
    set?: BigInt;

    @Field(() => String, {
        nullable: true,
    })
    increment?: BigInt;

    @Field(() => String, {
        nullable: true,
    })
    decrement?: BigInt;

    @Field(() => String, {
        nullable: true,
    })
    multiply?: BigInt;

    @Field(() => String, {
        nullable: true,
    })
    divide?: BigInt;
}
