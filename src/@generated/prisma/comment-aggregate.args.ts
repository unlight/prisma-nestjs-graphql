import { ArgsType, Field, Int } from '@nestjs/graphql';

import { CommentCountAggregateInput } from '../comment/comment-count-aggregate.input';
import { CommentMaxAggregateInput } from '../comment/comment-max-aggregate.input';
import { CommentMinAggregateInput } from '../comment/comment-min-aggregate.input';
import { CommentOrderByWithRelationInput } from '../comment/comment-order-by-with-relation.input';
import { CommentWhereInput } from '../comment/comment-where.input';
import { CommentWhereUniqueInput } from '../comment/comment-where-unique.input';

@ArgsType()
export class CommentAggregateArgs {
    @Field(() => CommentWhereInput, { nullable: true })
    where?: CommentWhereInput;

    @Field(() => [CommentOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<CommentOrderByWithRelationInput>;

    @Field(() => CommentWhereUniqueInput, { nullable: true })
    cursor?: CommentWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => CommentCountAggregateInput, { nullable: true })
    _count?: CommentCountAggregateInput;

    @Field(() => CommentMinAggregateInput, { nullable: true })
    _min?: CommentMinAggregateInput;

    @Field(() => CommentMaxAggregateInput, { nullable: true })
    _max?: CommentMaxAggregateInput;
}
