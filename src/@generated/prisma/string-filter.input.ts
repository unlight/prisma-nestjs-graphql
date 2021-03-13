import { Field, InputType } from '@nestjs/graphql';

import { NestedStringFilter } from './nested-string-filter.input';
import { QueryMode } from './query-mode.enum';

@InputType()
export class StringFilter {
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

    @Field(() => QueryMode, { nullable: true })
    mode?: QueryMode;

    @Field(() => NestedStringFilter, { nullable: true })
    not?: NestedStringFilter;
}
