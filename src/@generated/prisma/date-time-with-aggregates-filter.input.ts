import { Field, InputType } from '@nestjs/graphql';

import { DateTimeFilter } from './date-time-filter.input';
import { IntFilter } from './int-filter.input';

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => String, {
        nullable: true,
    })
    equals?: Date | string;

    @Field(() => [String], {
        nullable: true,
    })
    in?: Array<Date> | Array<string>;

    @Field(() => [String], {
        nullable: true,
    })
    notIn?: Array<Date> | Array<string>;

    @Field(() => String, {
        nullable: true,
    })
    lt?: Date | string;

    @Field(() => String, {
        nullable: true,
    })
    lte?: Date | string;

    @Field(() => String, {
        nullable: true,
    })
    gt?: Date | string;

    @Field(() => String, {
        nullable: true,
    })
    gte?: Date | string;

    @Field(() => DateTimeWithAggregatesFilter, {
        nullable: true,
    })
    not?: DateTimeWithAggregatesFilter;

    @Field(() => IntFilter, {
        nullable: true,
    })
    count?: IntFilter;

    @Field(() => DateTimeFilter, {
        nullable: true,
    })
    min?: DateTimeFilter;

    @Field(() => DateTimeFilter, {
        nullable: true,
    })
    max?: DateTimeFilter;
}
