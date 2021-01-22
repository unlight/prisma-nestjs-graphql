import { Field, InputType } from '@nestjs/graphql';

import { IntFilter } from './int-filter.input';
import { QueryMode } from './query-mode.enum';
import { StringFilter } from './string-filter.input';

@InputType()
export class StringWithAggregatesFilter {
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

    @Field(() => String, {
        nullable: true,
    })
    contains?: string;

    @Field(() => String, {
        nullable: true,
    })
    startsWith?: string;

    @Field(() => String, {
        nullable: true,
    })
    endsWith?: string;

    @Field(() => QueryMode, {
        nullable: true,
    })
    mode?: QueryMode;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    not?: string | StringWithAggregatesFilter;

    @Field(() => IntFilter, {
        nullable: true,
    })
    count?: IntFilter;

    @Field(() => StringFilter, {
        nullable: true,
    })
    min?: StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
    })
    max?: StringFilter;
}
