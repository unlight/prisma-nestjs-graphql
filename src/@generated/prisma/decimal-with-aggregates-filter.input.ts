import { Field, InputType } from '@nestjs/graphql';

import { DecimalFilter } from './decimal-filter.input';
import { IntFilter } from './int-filter.input';

@InputType()
export class DecimalWithAggregatesFilter {
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

    @Field(() => DecimalWithAggregatesFilter, {
        nullable: true,
    })
    not?: DecimalWithAggregatesFilter;

    @Field(() => IntFilter, {
        nullable: true,
    })
    count?: IntFilter;

    @Field(() => DecimalFilter, {
        nullable: true,
    })
    avg?: DecimalFilter;

    @Field(() => DecimalFilter, {
        nullable: true,
    })
    sum?: DecimalFilter;

    @Field(() => DecimalFilter, {
        nullable: true,
    })
    min?: DecimalFilter;

    @Field(() => DecimalFilter, {
        nullable: true,
    })
    max?: DecimalFilter;
}
