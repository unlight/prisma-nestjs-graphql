import { Field, Float, InputType } from '@nestjs/graphql';

import { NestedFloatFilter } from './nested-float-filter.input';
import { NestedFloatWithAggregatesFilter } from './nested-float-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';

@InputType()
export class FloatWithAggregatesFilter {
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

    @Field(() => NestedFloatWithAggregatesFilter, { nullable: true })
    not?: NestedFloatWithAggregatesFilter;

    @Field(() => NestedIntFilter, { nullable: true })
    count?: NestedIntFilter;

    @Field(() => NestedFloatFilter, { nullable: true })
    avg?: NestedFloatFilter;

    @Field(() => NestedFloatFilter, { nullable: true })
    sum?: NestedFloatFilter;

    @Field(() => NestedFloatFilter, { nullable: true })
    min?: NestedFloatFilter;

    @Field(() => NestedFloatFilter, { nullable: true })
    max?: NestedFloatFilter;
}
