import { Field, InputType } from '@nestjs/graphql';

import { NestedDateTimeFilter } from './nested-date-time-filter.input';
import { NestedDateTimeWithAggregatesFilter } from './nested-date-time-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, { nullable: true })
    equals?: Date | string;

    @Field(() => [Date], { nullable: true })
    in?: Array<Date> | Array<string>;

    @Field(() => [Date], { nullable: true })
    notIn?: Array<Date> | Array<string>;

    @Field(() => Date, { nullable: true })
    lt?: Date | string;

    @Field(() => Date, { nullable: true })
    lte?: Date | string;

    @Field(() => Date, { nullable: true })
    gt?: Date | string;

    @Field(() => Date, { nullable: true })
    gte?: Date | string;

    @Field(() => NestedDateTimeWithAggregatesFilter, { nullable: true })
    not?: NestedDateTimeWithAggregatesFilter;

    @Field(() => NestedIntFilter, { nullable: true })
    count?: NestedIntFilter;

    @Field(() => NestedDateTimeFilter, { nullable: true })
    min?: NestedDateTimeFilter;

    @Field(() => NestedDateTimeFilter, { nullable: true })
    max?: NestedDateTimeFilter;
}
