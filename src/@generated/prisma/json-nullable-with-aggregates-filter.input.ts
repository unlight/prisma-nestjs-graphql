import { Field, InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedJsonNullableFilter } from './nested-json-nullable-filter.input';

@InputType()
export class JsonNullableWithAggregatesFilter {
    @Field(() => GraphQLJSON, { nullable: true })
    equals?: any;

    @Field(() => GraphQLJSON, { nullable: true })
    not?: any;

    @Field(() => NestedIntNullableFilter, { nullable: true })
    count?: NestedIntNullableFilter;

    @Field(() => NestedJsonNullableFilter, { nullable: true })
    min?: NestedJsonNullableFilter;

    @Field(() => NestedJsonNullableFilter, { nullable: true })
    max?: NestedJsonNullableFilter;
}
