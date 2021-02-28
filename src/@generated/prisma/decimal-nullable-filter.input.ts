import { Field, InputType } from '@nestjs/graphql';

import { NestedDecimalNullableFilter } from './nested-decimal-nullable-filter.input';

@InputType()
export class DecimalNullableFilter {
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

    @Field(() => NestedDecimalNullableFilter, {
        nullable: true,
    })
    not?: NestedDecimalNullableFilter;
}
