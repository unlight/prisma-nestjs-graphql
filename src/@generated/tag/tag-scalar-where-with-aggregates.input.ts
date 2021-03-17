import { Field, InputType } from '@nestjs/graphql';

import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class TagScalarWhereWithAggregatesInput {
    @Field(() => [TagScalarWhereWithAggregatesInput], { nullable: true })
    AND?: Array<TagScalarWhereWithAggregatesInput>;

    @Field(() => [TagScalarWhereWithAggregatesInput], { nullable: true })
    OR?: Array<TagScalarWhereWithAggregatesInput>;

    @Field(() => [TagScalarWhereWithAggregatesInput], { nullable: true })
    NOT?: Array<TagScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    name?: StringWithAggregatesFilter;
}
