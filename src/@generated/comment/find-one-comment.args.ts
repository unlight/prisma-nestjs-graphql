import { ArgsType, Field } from '@nestjs/graphql';

import { CommentWhereUniqueInput } from './comment-where-unique.input';

@ArgsType()
export class FindOneCommentArgs {
    @Field(() => CommentWhereUniqueInput, {
        nullable: true,
    })
    where?: CommentWhereUniqueInput;
}
