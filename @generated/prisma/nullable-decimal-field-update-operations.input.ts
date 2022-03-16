import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@InputType()
export class NullableDecimalFieldUpdateOperationsInput {
    @Field(() => GraphQLDecimal, { nullable: true })
    set?: Decimal;

    @Field(() => GraphQLDecimal, { nullable: true })
    increment?: Decimal;

    @Field(() => GraphQLDecimal, { nullable: true })
    decrement?: Decimal;

    @Field(() => GraphQLDecimal, { nullable: true })
    multiply?: Decimal;

    @Field(() => GraphQLDecimal, { nullable: true })
    divide?: Decimal;
}
