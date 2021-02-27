import { Field, InputType } from '@nestjs/graphql';

import { NestedBigIntNullableFilter } from './nested-big-int-nullable-filter.input';
import { NestedBigIntNullableWithAggregatesFilter } from './nested-big-int-nullable-with-aggregates-filter.input';
import { NestedFloatNullableFilter } from './nested-float-nullable-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';

@InputType()
export class BigIntNullableWithAggregatesFilter {
    @Field(() => String, {
        nullable: true,
    })
    equals?: BigInt;

    @Field(() => [String], {
        nullable: true,
    })
    in?: Array<BigInt>;

    @Field(() => [String], {
        nullable: true,
    })
    notIn?: Array<BigInt>;

    @Field(() => String, {
        nullable: true,
    })
    lt?: BigInt;

    @Field(() => String, {
        nullable: true,
    })
    lte?: BigInt;

    @Field(() => String, {
        nullable: true,
    })
    gt?: BigInt;

    @Field(() => String, {
        nullable: true,
    })
    gte?: BigInt;

    @Field(() => NestedBigIntNullableWithAggregatesFilter, {
        nullable: true,
    })
    not?: NestedBigIntNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {
        nullable: true,
    })
    count?: NestedIntNullableFilter;

    @Field(() => NestedFloatNullableFilter, {
        nullable: true,
    })
    avg?: NestedFloatNullableFilter;

    @Field(() => NestedBigIntNullableFilter, {
        nullable: true,
    })
    sum?: NestedBigIntNullableFilter;

    @Field(() => NestedBigIntNullableFilter, {
        nullable: true,
    })
    min?: NestedBigIntNullableFilter;

    @Field(() => NestedBigIntNullableFilter, {
        nullable: true,
    })
    max?: NestedBigIntNullableFilter;
}
