import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';
import { CommentUncheckedCreateWithoutAuthorInput } from './comment-unchecked-create-without-author.input';
import { CommentUncheckedUpdateWithoutAuthorInput } from './comment-unchecked-update-without-author.input';
import { CommentUpdateWithoutAuthorInput } from './comment-update-without-author.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => CommentWhereUniqueInput, {
        nullable: false,
    })
    where!: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutAuthorInput, {
        nullable: false,
    })
    update!: CommentUpdateWithoutAuthorInput | CommentUncheckedUpdateWithoutAuthorInput;

    @Field(() => CommentCreateWithoutAuthorInput, {
        nullable: false,
    })
    create!: CommentCreateWithoutAuthorInput | CommentUncheckedCreateWithoutAuthorInput;
}
