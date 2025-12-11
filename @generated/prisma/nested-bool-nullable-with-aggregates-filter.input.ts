import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedBoolNullableFilter } from './nested-bool-nullable-filter.input';

@InputType()
export class NestedBoolNullableWithAggregatesFilter {

    @Field(() => Boolean, {nullable:true})
    equals?: boolean;

    @Field(() => NestedBoolNullableWithAggregatesFilter, {nullable:true})
    not?: NestedBoolNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedBoolNullableFilter, {nullable:true})
    _min?: NestedBoolNullableFilter;

    @Field(() => NestedBoolNullableFilter, {nullable:true})
    _max?: NestedBoolNullableFilter;
}
