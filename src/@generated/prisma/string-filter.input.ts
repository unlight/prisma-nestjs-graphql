import { Field, InputType } from '@nestjs/graphql';

import { QueryMode } from './query-mode.enum';

@InputType()
export class StringFilter {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    equals?: string;

    @Field(() => [String], {
        nullable: true,
        description: undefined,
    })
    in?: Array<string>;

    @Field(() => [String], {
        nullable: true,
        description: undefined,
    })
    notIn?: Array<string>;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    lt?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    lte?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    gt?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    gte?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    contains?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    startsWith?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    endsWith?: string;

    @Field(() => QueryMode, {
        nullable: true,
        description: undefined,
    })
    mode?: QueryMode;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    not?: string | StringFilter;
}
