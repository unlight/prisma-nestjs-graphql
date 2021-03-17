import { Field, InputType, Int } from '@nestjs/graphql';

import { NestedFloatFilter } from './nested-float-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';

@InputType()
export class NestedIntWithAggregatesFilter {
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

    @Field(() => NestedIntWithAggregatesFilter, { nullable: true })
    not?: NestedIntWithAggregatesFilter;

    @Field(() => NestedIntFilter, { nullable: true })
    count?: NestedIntFilter;

    @Field(() => NestedFloatFilter, { nullable: true })
    avg?: NestedFloatFilter;

    @Field(() => NestedIntFilter, { nullable: true })
    sum?: NestedIntFilter;

    @Field(() => NestedIntFilter, { nullable: true })
    min?: NestedIntFilter;

    @Field(() => NestedIntFilter, { nullable: true })
    max?: NestedIntFilter;
}
