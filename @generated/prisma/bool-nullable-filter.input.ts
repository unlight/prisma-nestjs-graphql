import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NestedBoolNullableFilter } from './nested-bool-nullable-filter.input';

@InputType()
export class BoolNullableFilter {

    @Field(() => Boolean, {nullable:true})
    equals?: boolean;

    @Field(() => NestedBoolNullableFilter, {nullable:true})
    not?: NestedBoolNullableFilter;
}
