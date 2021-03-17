import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NullableBigIntFieldUpdateOperationsInput {
    @Field(() => String, { nullable: true })
    set?: bigint | number;

    @Field(() => String, { nullable: true })
    increment?: bigint | number;

    @Field(() => String, { nullable: true })
    decrement?: bigint | number;

    @Field(() => String, { nullable: true })
    multiply?: bigint | number;

    @Field(() => String, { nullable: true })
    divide?: bigint | number;
}
