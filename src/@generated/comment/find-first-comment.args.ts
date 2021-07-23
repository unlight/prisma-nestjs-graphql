import { ArgsType, Field, Int } from '@nestjs/graphql';

import { CommentOrderByWithRelationInput } from './comment-order-by-with-relation.input';
import { CommentScalarFieldEnum } from './comment-scalar-field.enum';
import { CommentWhereInput } from './comment-where.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@ArgsType()
export class FindFirstCommentArgs {
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

    @Field(() => [CommentScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof CommentScalarFieldEnum>;
}
