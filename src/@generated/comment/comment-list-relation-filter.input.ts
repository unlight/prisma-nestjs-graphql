import { Field, InputType } from '@nestjs/graphql';

import { CommentWhereInput } from './comment-where.input';

@InputType()
export class CommentListRelationFilter {
    @Field(() => CommentWhereInput, { nullable: true })
    every?: CommentWhereInput;

    @Field(() => CommentWhereInput, { nullable: true })
    some?: CommentWhereInput;

    @Field(() => CommentWhereInput, { nullable: true })
    none?: CommentWhereInput;
}
