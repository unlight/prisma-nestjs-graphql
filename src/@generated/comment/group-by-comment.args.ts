import { ArgsType, Field, Int } from '@nestjs/graphql';

import { CommentCountAggregateInput } from './comment-count-aggregate.input';
import { CommentMaxAggregateInput } from './comment-max-aggregate.input';
import { CommentMinAggregateInput } from './comment-min-aggregate.input';
import { CommentOrderByInput } from './comment-order-by.input';
import { CommentScalarFieldEnum } from './comment-scalar-field.enum';
import { CommentScalarWhereWithAggregatesInput } from './comment-scalar-where-with-aggregates.input';
import { CommentWhereInput } from './comment-where.input';

@ArgsType()
export class GroupByCommentArgs {
    @Field(() => CommentWhereInput, { nullable: true })
    where?: CommentWhereInput;

    @Field(() => [CommentOrderByInput], { nullable: true })
    orderBy?: Array<CommentOrderByInput>;

    @Field(() => [CommentScalarFieldEnum], { nullable: false })
    by!: Array<CommentScalarFieldEnum>;

    @Field(() => CommentScalarWhereWithAggregatesInput, { nullable: true })
    having?: CommentScalarWhereWithAggregatesInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => CommentCountAggregateInput, { nullable: true })
    count?: CommentCountAggregateInput;

    @Field(() => CommentMinAggregateInput, { nullable: true })
    min?: CommentMinAggregateInput;

    @Field(() => CommentMaxAggregateInput, { nullable: true })
    max?: CommentMaxAggregateInput;
}
