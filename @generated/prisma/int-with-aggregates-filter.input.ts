import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NestedIntWithAggregatesFilter } from './nested-int-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedFloatFilter } from './nested-float-filter.input';

@InputType()
export class IntWithAggregatesFilter {

    @Field(() => Int, {nullable:true})
    equals?: number;

    @Field(() => [Int], {nullable:true})
    in?: Array<number>;

    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;

    @Field(() => Int, {nullable:true})
    lt?: number;

    @Field(() => Int, {nullable:true})
    lte?: number;

    @Field(() => Int, {nullable:true})
    gt?: number;

    @Field(() => Int, {nullable:true})
    gte?: number;

    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: NestedIntWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: NestedFloatFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: NestedIntFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _min?: NestedIntFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _max?: NestedIntFilter;
}
