import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentCreateInput } from './comment-create.input';
import { CommentUpdateInput } from './comment-update.input';

@ArgsType()
export class UpsertOneCommentArgs {
    @Field(() => CommentWhereUniqueInput, { nullable: false })
    where!: CommentWhereUniqueInput;

    @Field(() => CommentCreateInput, { nullable: false })
    create!: CommentCreateInput;

    @Field(() => CommentUpdateInput, { nullable: false })
    update!: CommentUpdateInput;
}
