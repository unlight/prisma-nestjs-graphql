import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { NestedFloatNullableWithAggregatesFilter } from './nested-float-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedFloatNullableFilter } from './nested-float-nullable-filter.input';

@InputType()
export class FloatNullableWithAggregatesFilter {

    @Field(() => Float, {nullable:true})
    equals?: number;

    @Field(() => [Float], {nullable:true})
    in?: Array<number>;

    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;

    @Field(() => Float, {nullable:true})
    lt?: number;

    @Field(() => Float, {nullable:true})
    lte?: number;

    @Field(() => Float, {nullable:true})
    gt?: number;

    @Field(() => Float, {nullable:true})
    gte?: number;

    @Field(() => NestedFloatNullableWithAggregatesFilter, {nullable:true})
    not?: NestedFloatNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _avg?: NestedFloatNullableFilter;

    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _sum?: NestedFloatNullableFilter;

    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _min?: NestedFloatNullableFilter;

    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _max?: NestedFloatNullableFilter;
}
