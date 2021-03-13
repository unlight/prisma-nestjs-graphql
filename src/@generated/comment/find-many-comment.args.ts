import { ArgsType, Field, Int } from '@nestjs/graphql';

import { CommentOrderByInput } from './comment-order-by.input';
import { CommentScalarFieldEnum } from './comment-scalar-field.enum';
import { CommentWhereInput } from './comment-where.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@ArgsType()
export class FindManyCommentArgs {
    @Field(() => CommentWhereInput, { nullable: true })
    where?: CommentWhereInput;

    @Field(() => [CommentOrderByInput], { nullable: true })
    orderBy?: Array<CommentOrderByInput>;

    @Field(() => CommentWhereUniqueInput, { nullable: true })
    cursor?: CommentWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => [CommentScalarFieldEnum], { nullable: true })
    distinct?: Array<CommentScalarFieldEnum>;
}
