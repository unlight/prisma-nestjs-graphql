import { ArgsType, Field, Int } from '@nestjs/graphql';

import { TagMaxAggregateInput } from './tag-max-aggregate.input';
import { TagMinAggregateInput } from './tag-min-aggregate.input';
import { TagOrderByInput } from './tag-order-by.input';
import { TagWhereInput } from './tag-where.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@ArgsType()
export class AggregateTagArgs {
    @Field(() => TagWhereInput, {
        nullable: true,
    })
    where?: TagWhereInput;

    @Field(() => [TagOrderByInput], {
        nullable: true,
    })
    orderBy?: Array<TagOrderByInput>;

    @Field(() => TagWhereUniqueInput, {
        nullable: true,
    })
    cursor?: TagWhereUniqueInput;

    @Field(() => Int, {
        nullable: true,
    })
    take?: number;

    @Field(() => Int, {
        nullable: true,
    })
    skip?: number;

    @Field(() => Boolean, {
        nullable: true,
    })
    count?: true;

    @Field(() => TagMinAggregateInput, {
        nullable: true,
    })
    min?: TagMinAggregateInput;

    @Field(() => TagMaxAggregateInput, {
        nullable: true,
    })
    max?: TagMaxAggregateInput;
}
