import { ArgsType, Field, Int } from '@nestjs/graphql';

import { CommentMaxAggregateInput } from './comment-max-aggregate.input';
import { CommentMinAggregateInput } from './comment-min-aggregate.input';
import { CommentOrderByInput } from './comment-order-by.input';
import { CommentWhereInput } from './comment-where.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@ArgsType()
export class AggregateCommentArgs {
    @Field(() => CommentWhereInput, {
        nullable: true,
    })
    where?: CommentWhereInput;

    @Field(() => [CommentOrderByInput], {
        nullable: true,
    })
    orderBy?: Array<CommentOrderByInput>;

    @Field(() => CommentWhereUniqueInput, {
        nullable: true,
    })
    cursor?: CommentWhereUniqueInput;

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

    @Field(() => CommentMinAggregateInput, {
        nullable: true,
    })
    min?: CommentMinAggregateInput;

    @Field(() => CommentMaxAggregateInput, {
        nullable: true,
    })
    max?: CommentMaxAggregateInput;
}
