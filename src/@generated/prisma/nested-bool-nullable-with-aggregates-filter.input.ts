import { Field, InputType } from '@nestjs/graphql';

import { NestedBoolNullableFilter } from './nested-bool-nullable-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';

@InputType()
export class NestedBoolNullableWithAggregatesFilter {
    @Field(() => Boolean, { nullable: true })
    equals?: boolean;

    @Field(() => NestedBoolNullableWithAggregatesFilter, { nullable: true })
    not?: NestedBoolNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, { nullable: true })
    count?: NestedIntNullableFilter;

    @Field(() => NestedBoolNullableFilter, { nullable: true })
    min?: NestedBoolNullableFilter;

    @Field(() => NestedBoolNullableFilter, { nullable: true })
    max?: NestedBoolNullableFilter;
}
