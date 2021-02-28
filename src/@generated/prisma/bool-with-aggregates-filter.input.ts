import { Field, InputType } from '@nestjs/graphql';

import { BoolFilter } from './bool-filter.input';
import { IntFilter } from './int-filter.input';

@InputType()
export class BoolWithAggregatesFilter {
    @Field(() => Boolean, {
        nullable: true,
    })
    equals?: boolean;

    @Field(() => BoolWithAggregatesFilter, {
        nullable: true,
    })
    not?: BoolWithAggregatesFilter;

    @Field(() => IntFilter, {
        nullable: true,
    })
    count?: IntFilter;

    @Field(() => BoolFilter, {
        nullable: true,
    })
    min?: BoolFilter;

    @Field(() => BoolFilter, {
        nullable: true,
    })
    max?: BoolFilter;
}
