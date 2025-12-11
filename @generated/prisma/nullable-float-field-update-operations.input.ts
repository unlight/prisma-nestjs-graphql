import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class NullableFloatFieldUpdateOperationsInput {

    @Field(() => Float, {nullable:true})
    set?: number;

    @Field(() => Float, {nullable:true})
    increment?: number;

    @Field(() => Float, {nullable:true})
    decrement?: number;

    @Field(() => Float, {nullable:true})
    multiply?: number;

    @Field(() => Float, {nullable:true})
    divide?: number;
}
