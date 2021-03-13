import { Field, InputType } from '@nestjs/graphql';

import { NestedBigIntNullableFilter } from './nested-big-int-nullable-filter.input';
import { NestedFloatNullableFilter } from './nested-float-nullable-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';

@InputType()
export class NestedBigIntNullableWithAggregatesFilter {
    @Field(() => String, { nullable: true })
    equals?: bigint | number;

    @Field(() => [String], { nullable: true })
    in?: Array<bigint> | Array<number>;

    @Field(() => [String], { nullable: true })
    notIn?: Array<bigint> | Array<number>;

    @Field(() => String, { nullable: true })
    lt?: bigint | number;

    @Field(() => String, { nullable: true })
    lte?: bigint | number;

    @Field(() => String, { nullable: true })
    gt?: bigint | number;

    @Field(() => String, { nullable: true })
    gte?: bigint | number;

    @Field(() => NestedBigIntNullableWithAggregatesFilter, { nullable: true })
    not?: NestedBigIntNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, { nullable: true })
    count?: NestedIntNullableFilter;

    @Field(() => NestedFloatNullableFilter, { nullable: true })
    avg?: NestedFloatNullableFilter;

    @Field(() => NestedBigIntNullableFilter, { nullable: true })
    sum?: NestedBigIntNullableFilter;

    @Field(() => NestedBigIntNullableFilter, { nullable: true })
    min?: NestedBigIntNullableFilter;

    @Field(() => NestedBigIntNullableFilter, { nullable: true })
    max?: NestedBigIntNullableFilter;
}
