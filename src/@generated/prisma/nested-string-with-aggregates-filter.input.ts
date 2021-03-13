import { Field, InputType } from '@nestjs/graphql';

import { NestedIntFilter } from './nested-int-filter.input';
import { NestedStringFilter } from './nested-string-filter.input';

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, { nullable: true })
    equals?: string;

    @Field(() => [String], { nullable: true })
    in?: Array<string>;

    @Field(() => [String], { nullable: true })
    notIn?: Array<string>;

    @Field(() => String, { nullable: true })
    lt?: string;

    @Field(() => String, { nullable: true })
    lte?: string;

    @Field(() => String, { nullable: true })
    gt?: string;

    @Field(() => String, { nullable: true })
    gte?: string;

    @Field(() => String, { nullable: true })
    contains?: string;

    @Field(() => String, { nullable: true })
    startsWith?: string;

    @Field(() => String, { nullable: true })
    endsWith?: string;

    @Field(() => NestedStringWithAggregatesFilter, { nullable: true })
    not?: NestedStringWithAggregatesFilter;

    @Field(() => NestedIntFilter, { nullable: true })
    count?: NestedIntFilter;

    @Field(() => NestedStringFilter, { nullable: true })
    min?: NestedStringFilter;

    @Field(() => NestedStringFilter, { nullable: true })
    max?: NestedStringFilter;
}
