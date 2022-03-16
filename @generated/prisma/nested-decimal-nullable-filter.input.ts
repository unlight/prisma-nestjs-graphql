import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@InputType()
export class NestedDecimalNullableFilter {
    @Field(() => GraphQLDecimal, { nullable: true })
    equals?: Decimal;

    @Field(() => [GraphQLDecimal], { nullable: true })
    in?: Array<Decimal>;

    @Field(() => [GraphQLDecimal], { nullable: true })
    notIn?: Array<Decimal>;

    @Field(() => GraphQLDecimal, { nullable: true })
    lt?: Decimal;

    @Field(() => GraphQLDecimal, { nullable: true })
    lte?: Decimal;

    @Field(() => GraphQLDecimal, { nullable: true })
    gt?: Decimal;

    @Field(() => GraphQLDecimal, { nullable: true })
    gte?: Decimal;

    @Field(() => NestedDecimalNullableFilter, { nullable: true })
    not?: NestedDecimalNullableFilter;
}
