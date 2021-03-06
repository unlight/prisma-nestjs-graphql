import { Field, InputType, Int } from '@nestjs/graphql';

import { NestedFloatNullableFilter } from './nested-float-nullable-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';

@InputType()
export class NestedIntNullableWithAggregatesFilter {
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
    @Field(() => NestedIntNullableFilter, { nullable: true })
    _count?: NestedIntNullableFilter;

    @Field(() => NestedFloatNullableFilter, { nullable: true })
    _avg?: NestedFloatNullableFilter;

    @Field(() => NestedIntNullableFilter, { nullable: true })
    _sum?: NestedIntNullableFilter;

    @Field(() => NestedIntNullableFilter, { nullable: true })
    _min?: NestedIntNullableFilter;

    @Field(() => NestedIntNullableFilter, { nullable: true })
    _max?: NestedIntNullableFilter;
}
