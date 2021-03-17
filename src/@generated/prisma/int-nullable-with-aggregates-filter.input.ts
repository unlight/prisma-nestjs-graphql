import { Field, InputType, Int } from '@nestjs/graphql';

import { NestedFloatNullableFilter } from './nested-float-nullable-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedIntNullableWithAggregatesFilter } from './nested-int-nullable-with-aggregates-filter.input';

@InputType()
export class IntNullableWithAggregatesFilter {
    @Field(() => Int, { nullable: true })
    equals?: number;

    @Field(() => [Int], { nullable: true })
    in?: Array<number>;

    @Field(() => [Int], { nullable: true })
    notIn?: Array<number>;

    @Field(() => Int, { nullable: true })
    lt?: number;

    @Field(() => Int, { nullable: true })
    lte?: number;

    @Field(() => Int, { nullable: true })
    gt?: number;

    @Field(() => Int, { nullable: true })
    gte?: number;

    @Field(() => NestedIntNullableWithAggregatesFilter, { nullable: true })
    not?: NestedIntNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, { nullable: true })
    count?: NestedIntNullableFilter;

    @Field(() => NestedFloatNullableFilter, { nullable: true })
    avg?: NestedFloatNullableFilter;

    @Field(() => NestedIntNullableFilter, { nullable: true })
    sum?: NestedIntNullableFilter;

    @Field(() => NestedIntNullableFilter, { nullable: true })
    min?: NestedIntNullableFilter;

    @Field(() => NestedIntNullableFilter, { nullable: true })
    max?: NestedIntNullableFilter;
}
