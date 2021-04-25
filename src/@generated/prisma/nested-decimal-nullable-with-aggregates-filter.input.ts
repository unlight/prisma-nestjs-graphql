import { Field, InputType } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

import { NestedDecimalNullableFilter } from './nested-decimal-nullable-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';

@InputType()
export class NestedDecimalNullableWithAggregatesFilter {
    @Field(() => GraphQLDecimal, { nullable: true })
    equals?: any;

    @Field(() => [GraphQLDecimal], { nullable: true })
    in?: Array<any>;

    @Field(() => [GraphQLDecimal], { nullable: true })
    notIn?: Array<any>;

    @Field(() => GraphQLDecimal, { nullable: true })
    lt?: any;

    @Field(() => GraphQLDecimal, { nullable: true })
    lte?: any;

    @Field(() => GraphQLDecimal, { nullable: true })
    gt?: any;

    @Field(() => GraphQLDecimal, { nullable: true })
    gte?: any;

    @Field(() => NestedDecimalNullableWithAggregatesFilter, { nullable: true })
    not?: NestedDecimalNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, { nullable: true })
    count?: NestedIntNullableFilter;

    @Field(() => NestedDecimalNullableFilter, { nullable: true })
    avg?: NestedDecimalNullableFilter;

    @Field(() => NestedDecimalNullableFilter, { nullable: true })
    sum?: NestedDecimalNullableFilter;

    @Field(() => NestedDecimalNullableFilter, { nullable: true })
    min?: NestedDecimalNullableFilter;

    @Field(() => NestedDecimalNullableFilter, { nullable: true })
    max?: NestedDecimalNullableFilter;
}
