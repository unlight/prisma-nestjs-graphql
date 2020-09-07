import { Field, InputType } from '@nestjs/graphql';

import { CommentWhereInput } from './comment-where.input';

@InputType()
export class CommentListRelationFilter {
    @Field(() => CommentWhereInput, {
        nullable: true,
        description: undefined,
    })
    every?: CommentWhereInput;

    @Field(() => CommentWhereInput, {
        nullable: true,
        description: undefined,
    })
    some?: CommentWhereInput;

    @Field(() => CommentWhereInput, {
        nullable: true,
        description: undefined,
    })
    none?: CommentWhereInput;
}
