import { Field, Float, InputType } from '@nestjs/graphql';

import { NestedFloatNullableFilter } from './nested-float-nullable-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';

@InputType()
export class NestedFloatNullableWithAggregatesFilter {
    @Field(() => Float, { nullable: true })
    equals?: number;

    @Field(() => [Float], { nullable: true })
    in?: Array<number>;

    @Field(() => [Float], { nullable: true })
    notIn?: Array<number>;

    @Field(() => Float, { nullable: true })
    lt?: number;

    @Field(() => Float, { nullable: true })
    lte?: number;

    @Field(() => Float, { nullable: true })
    gt?: number;

    @Field(() => Float, { nullable: true })
    gte?: number;

    @Field(() => NestedFloatNullableWithAggregatesFilter, { nullable: true })
    not?: NestedFloatNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, { nullable: true })
    count?: NestedIntNullableFilter;

    @Field(() => NestedFloatNullableFilter, { nullable: true })
    avg?: NestedFloatNullableFilter;

    @Field(() => NestedFloatNullableFilter, { nullable: true })
    sum?: NestedFloatNullableFilter;

    @Field(() => NestedFloatNullableFilter, { nullable: true })
    min?: NestedFloatNullableFilter;

    @Field(() => NestedFloatNullableFilter, { nullable: true })
    max?: NestedFloatNullableFilter;
}
