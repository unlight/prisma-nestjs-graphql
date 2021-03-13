import { ArgsType, Field } from '@nestjs/graphql';

import { CommentUpdateInput } from './comment-update.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@ArgsType()
export class UpdateOneCommentArgs {
    @Field(() => CommentUpdateInput, { nullable: false })
    data!: CommentUpdateInput;

    @Field(() => CommentWhereUniqueInput, { nullable: false })
    where!: CommentWhereUniqueInput;
}
