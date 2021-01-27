import { Field, InputType } from '@nestjs/graphql';

import { BooleanFilter } from './boolean-filter.input';
import { IntFilter } from './int-filter.input';

@InputType()
export class BooleanWithAggregatesFilter {
    @Field(() => Boolean, {
        nullable: true,
    })
    equals?: boolean;

    @Field(() => BooleanWithAggregatesFilter, {
        nullable: true,
    })
    not?: BooleanWithAggregatesFilter;

    @Field(() => IntFilter, {
        nullable: true,
    })
    count?: IntFilter;

    @Field(() => BooleanFilter, {
        nullable: true,
    })
    min?: BooleanFilter;

    @Field(() => BooleanFilter, {
        nullable: true,
    })
    max?: BooleanFilter;
}
