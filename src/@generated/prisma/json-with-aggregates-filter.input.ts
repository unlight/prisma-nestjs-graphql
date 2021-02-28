import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

import { IntFilter } from './int-filter.input';
import { JsonFilter } from './json-filter.input';

@InputType()
export class JsonWithAggregatesFilter {
    @Field(() => String, {
        nullable: true,
    })
    equals?: any;

    @Field(() => String, {
        nullable: true,
    })
    not?: any;

    @Field(() => IntFilter, {
        nullable: true,
    })
    count?: IntFilter;

    @Field(() => JsonFilter, {
        nullable: true,
    })
    min?: JsonFilter;

    @Field(() => JsonFilter, {
        nullable: true,
    })
    max?: JsonFilter;
}
