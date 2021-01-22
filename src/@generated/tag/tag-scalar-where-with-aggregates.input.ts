import { Field, InputType } from '@nestjs/graphql';

import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class TagScalarWhereWithAggregatesInput {
    @Field(() => [TagScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    AND?: TagScalarWhereWithAggregatesInput | Array<TagScalarWhereWithAggregatesInput>;

    @Field(() => [TagScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    OR?: Array<TagScalarWhereWithAggregatesInput>;

    @Field(() => [TagScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    NOT?: TagScalarWhereWithAggregatesInput | Array<TagScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    id?: StringWithAggregatesFilter | string;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    name?: StringWithAggregatesFilter | string;
}
