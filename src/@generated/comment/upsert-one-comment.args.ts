import { ArgsType, Field } from '@nestjs/graphql';

import { CommentCreateInput } from './comment-create.input';
import { CommentUpdateInput } from './comment-update.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@ArgsType()
export class UpsertOneCommentArgs {
    @Field(() => CommentWhereUniqueInput, { nullable: false })
    where!: CommentWhereUniqueInput;

    @Field(() => CommentCreateInput, { nullable: false })
    create!: CommentCreateInput;

    @Field(() => CommentUpdateInput, { nullable: false })
    update!: CommentUpdateInput;
}
