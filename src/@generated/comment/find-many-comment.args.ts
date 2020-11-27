import { ArgsType, Field, Int } from '@nestjs/graphql';

import { CommentDistinctFieldEnum } from './comment-distinct-field.enum';
import { CommentOrderByInput } from './comment-order-by.input';
import { CommentWhereInput } from './comment-where.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@ArgsType()
export class FindManyCommentArgs {
    @Field(() => CommentWhereInput, {
        nullable: true,
    })
    where?: CommentWhereInput;

    @Field(() => [CommentOrderByInput], {
        nullable: true,
    })
    orderBy?: Array<CommentOrderByInput> | CommentOrderByInput;

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

    @Field(() => [CommentDistinctFieldEnum], {
        nullable: true,
    })
    distinct?: Array<CommentDistinctFieldEnum>;
}
