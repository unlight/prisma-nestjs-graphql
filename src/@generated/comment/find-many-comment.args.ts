import { ArgsType, Field, Int } from '@nestjs/graphql';

import { CommentDistinctFieldEnum } from './comment-distinct-field.enum';
import { CommentOrderByInput } from './comment-order-by.input';
import { CommentWhereInput } from './comment-where.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@ArgsType()
export class FindManyCommentArgs {
    @Field(() => CommentWhereInput, {
        nullable: true,
        description: undefined,
    })
    where?: CommentWhereInput;

    @Field(() => [CommentOrderByInput], {
        nullable: true,
        description: undefined,
    })
    orderBy?: Array<CommentOrderByInput> | CommentOrderByInput;

    @Field(() => CommentWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    cursor?: CommentWhereUniqueInput;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    take?: number;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    skip?: number;

    @Field(() => [CommentDistinctFieldEnum], {
        nullable: true,
        description: undefined,
    })
    distinct?: Array<CommentDistinctFieldEnum>;
}
