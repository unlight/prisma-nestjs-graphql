import { Field, ObjectType } from '@nestjs/graphql';

import { CommentCountAggregate } from './comment-count-aggregate.output';
import { CommentMaxAggregate } from './comment-max-aggregate.output';
import { CommentMinAggregate } from './comment-min-aggregate.output';

@ObjectType()
export class AggregateComment {
    @Field(() => CommentCountAggregate, { nullable: true })
    count?: CommentCountAggregate;

    @Field(() => CommentMinAggregate, { nullable: true })
    min?: CommentMinAggregate;

    @Field(() => CommentMaxAggregate, { nullable: true })
    max?: CommentMaxAggregate;
}
