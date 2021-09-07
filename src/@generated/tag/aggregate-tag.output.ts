import { Field, ObjectType } from '@nestjs/graphql';

import { TagCountAggregate } from './tag-count-aggregate.output';
import { TagMaxAggregate } from './tag-max-aggregate.output';
import { TagMinAggregate } from './tag-min-aggregate.output';

@ObjectType()
export class AggregateTag {
    @Field(() => TagCountAggregate, { nullable: true })
    _count?: TagCountAggregate;

    @Field(() => TagMinAggregate, { nullable: true })
    _min?: TagMinAggregate;

    @Field(() => TagMaxAggregate, { nullable: true })
    _max?: TagMaxAggregate;
}
