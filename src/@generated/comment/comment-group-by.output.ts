import { Field, ObjectType } from '@nestjs/graphql';

import { CommentCountAggregate } from './comment-count-aggregate.output';
import { CommentMaxAggregate } from './comment-max-aggregate.output';
import { CommentMinAggregate } from './comment-min-aggregate.output';

@ObjectType()
export class CommentGroupBy {
    @Field(() => String, {
        nullable: true,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
    })
    createdAt?: Date | string;

    @Field(() => String, {
        nullable: true,
    })
    updatedAt?: Date | string;

    @Field(() => String, {
        nullable: true,
    })
    body?: string;

    @Field(() => String, {
        nullable: true,
    })
    authorId?: string;

    @Field(() => String, {
        nullable: true,
    })
    articleId?: string;

    @Field(() => CommentCountAggregate, {
        nullable: true,
    })
    count?: CommentCountAggregate;

    @Field(() => CommentMinAggregate, {
        nullable: true,
    })
    min?: CommentMinAggregate;

    @Field(() => CommentMaxAggregate, {
        nullable: true,
    })
    max?: CommentMaxAggregate;
}
