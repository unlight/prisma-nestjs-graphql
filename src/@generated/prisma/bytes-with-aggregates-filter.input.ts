import { Field, InputType } from '@nestjs/graphql';

import { BytesFilter } from './bytes-filter.input';
import { IntFilter } from './int-filter.input';

@InputType()
export class BytesWithAggregatesFilter {
    @Field(() => String, {
        nullable: true,
    })
    equals?: Buffer;

    @Field(() => BytesWithAggregatesFilter, {
        nullable: true,
    })
    not?: Buffer | BytesWithAggregatesFilter;

    @Field(() => IntFilter, {
        nullable: true,
    })
    count?: IntFilter;

    @Field(() => BytesFilter, {
        nullable: true,
    })
    min?: BytesFilter;

    @Field(() => BytesFilter, {
        nullable: true,
    })
    max?: BytesFilter;
}
