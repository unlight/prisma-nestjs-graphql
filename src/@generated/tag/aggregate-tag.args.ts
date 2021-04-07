import { ArgsType, Field, Int } from '@nestjs/graphql';

import { TagCountAggregateInput } from './tag-count-aggregate.input';
import { TagMaxAggregateInput } from './tag-max-aggregate.input';
import { TagMinAggregateInput } from './tag-min-aggregate.input';
import { TagOrderByWithRelationInput } from './tag-order-by-with-relation.input';
import { TagWhereInput } from './tag-where.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@ArgsType()
export class AggregateTagArgs {
    @Field(() => TagWhereInput, { nullable: true })
    where?: TagWhereInput;

    @Field(() => [TagOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<TagOrderByWithRelationInput>;

    @Field(() => TagWhereUniqueInput, { nullable: true })
    cursor?: TagWhereUniqueInput;

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
