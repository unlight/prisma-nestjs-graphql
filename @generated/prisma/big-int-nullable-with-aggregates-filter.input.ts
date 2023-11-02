import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NestedBigIntNullableWithAggregatesFilter } from './nested-big-int-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedFloatNullableFilter } from './nested-float-nullable-filter.input';
import { NestedBigIntNullableFilter } from './nested-big-int-nullable-filter.input';

@InputType()
export class BigIntNullableWithAggregatesFilter {

    @Field(() => String, {nullable:true})
    equals?: bigint | number;

    @Field(() => [String], {nullable:true})
    in?: Array<bigint> | Array<number>;

    @Field(() => [String], {nullable:true})
    notIn?: Array<bigint> | Array<number>;

    @Field(() => String, {nullable:true})
    lt?: bigint | number;

    @Field(() => String, {nullable:true})
    lte?: bigint | number;

    @Field(() => String, {nullable:true})
    gt?: bigint | number;

    @Field(() => String, {nullable:true})
    gte?: bigint | number;

    @Field(() => NestedBigIntNullableWithAggregatesFilter, {nullable:true})
    not?: NestedBigIntNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedFloatNullableFilter, {nullable:true})
    _avg?: NestedFloatNullableFilter;

    @Field(() => NestedBigIntNullableFilter, {nullable:true})
    _sum?: NestedBigIntNullableFilter;

    @Field(() => NestedBigIntNullableFilter, {nullable:true})
    _min?: NestedBigIntNullableFilter;

    @Field(() => NestedBigIntNullableFilter, {nullable:true})
    _max?: NestedBigIntNullableFilter;
}
