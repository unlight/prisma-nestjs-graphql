import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutAuthorInput } from './comment-update-without-author.input';
import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => CommentWhereUniqueInput, { nullable: false })
    where!: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutAuthorInput, { nullable: false })
    update!: CommentUpdateWithoutAuthorInput;

    @Field(() => CommentCreateWithoutAuthorInput, { nullable: false })
    create!: CommentCreateWithoutAuthorInput;
}
