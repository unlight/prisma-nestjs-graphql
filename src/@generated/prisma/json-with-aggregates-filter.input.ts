import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

import { IntFilter } from './int-filter.input';
import { JsonFilter } from './json-filter.input';

@InputType()
export class JsonWithAggregatesFilter {
    @Field(() => GraphQLJSON, {
        nullable: true,
    })
    equals?: object;

    @Field(() => GraphQLJSON, {
        nullable: true,
    })
    not?: object;

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
