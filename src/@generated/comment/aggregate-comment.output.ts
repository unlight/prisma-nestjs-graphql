import { Field, ObjectType } from '@nestjs/graphql';

import { CommentCountAggregate } from './comment-count-aggregate.output';
import { CommentMaxAggregate } from './comment-max-aggregate.output';
import { CommentMinAggregate } from './comment-min-aggregate.output';

@ObjectType()
export class AggregateComment {
    @Field(() => CommentCountAggregate, { nullable: true })
    _count?: CommentCountAggregate;

    @Field(() => CommentMinAggregate, { nullable: true })
    _min?: CommentMinAggregate;

    @Field(() => CommentMaxAggregate, { nullable: true })
    _max?: CommentMaxAggregate;
}
