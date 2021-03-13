import { ArgsType, Field, Int } from '@nestjs/graphql';

import { TagCountAggregateInput } from './tag-count-aggregate.input';
import { TagMaxAggregateInput } from './tag-max-aggregate.input';
import { TagMinAggregateInput } from './tag-min-aggregate.input';
import { TagOrderByInput } from './tag-order-by.input';
import { TagScalarFieldEnum } from './tag-scalar-field.enum';
import { TagScalarWhereWithAggregatesInput } from './tag-scalar-where-with-aggregates.input';
import { TagWhereInput } from './tag-where.input';

@ArgsType()
export class GroupByTagArgs {
    @Field(() => TagWhereInput, { nullable: true })
    where?: TagWhereInput;

    @Field(() => [TagOrderByInput], { nullable: true })
    orderBy?: Array<TagOrderByInput>;

    @Field(() => [TagScalarFieldEnum], { nullable: false })
    by!: Array<TagScalarFieldEnum>;

    @Field(() => TagScalarWhereWithAggregatesInput, { nullable: true })
    having?: TagScalarWhereWithAggregatesInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => TagCountAggregateInput, { nullable: true })
    count?: TagCountAggregateInput;

    @Field(() => TagMinAggregateInput, { nullable: true })
    min?: TagMinAggregateInput;

    @Field(() => TagMaxAggregateInput, { nullable: true })
    max?: TagMaxAggregateInput;
}
