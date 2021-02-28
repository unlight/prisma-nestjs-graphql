import { Field, InputType } from '@nestjs/graphql';

import { NestedDecimalNullableFilter } from './nested-decimal-nullable-filter.input';
import { NestedDecimalNullableWithAggregatesFilter } from './nested-decimal-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';

@InputType()
export class DecimalNullableWithAggregatesFilter {
    @Field(() => String, {
        nullable: true,
    })
    equals?: string;

    @Field(() => [String], {
        nullable: true,
    })
    in?: Array<string>;

    @Field(() => [String], {
        nullable: true,
    })
    notIn?: Array<string>;

    @Field(() => String, {
        nullable: true,
    })
    lt?: string;

    @Field(() => String, {
        nullable: true,
    })
    lte?: string;

    @Field(() => String, {
        nullable: true,
    })
    gt?: string;

    @Field(() => String, {
        nullable: true,
    })
    gte?: string;

    @Field(() => NestedDecimalNullableWithAggregatesFilter, {
        nullable: true,
    })
    not?: NestedDecimalNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {
        nullable: true,
    })
    count?: NestedIntNullableFilter;

    @Field(() => NestedDecimalNullableFilter, {
        nullable: true,
    })
    avg?: NestedDecimalNullableFilter;

    @Field(() => NestedDecimalNullableFilter, {
        nullable: true,
    })
    sum?: NestedDecimalNullableFilter;

    @Field(() => NestedDecimalNullableFilter, {
        nullable: true,
    })
    min?: NestedDecimalNullableFilter;

    @Field(() => NestedDecimalNullableFilter, {
        nullable: true,
    })
    max?: NestedDecimalNullableFilter;
}
