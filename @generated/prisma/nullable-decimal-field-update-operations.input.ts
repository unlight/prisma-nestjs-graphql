import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@InputType()
export class NullableDecimalFieldUpdateOperationsInput {
    @Field(() => GraphQLDecimal, { nullable: true })
    set?: any;

    @Field(() => GraphQLDecimal, { nullable: true })
    increment?: any;

    @Field(() => GraphQLDecimal, { nullable: true })
    decrement?: any;

    @Field(() => GraphQLDecimal, { nullable: true })
    multiply?: any;

    @Field(() => GraphQLDecimal, { nullable: true })
    divide?: any;
}
