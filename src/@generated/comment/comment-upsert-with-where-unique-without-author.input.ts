import { InputType, Field } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutAuthorDataInput } from './comment-update-without-author-data.input';
import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';

@InputType({})
export class CommentUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => CommentWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: CommentWhereUniqueInput | null;

    @Field(() => CommentUpdateWithoutAuthorDataInput, {
        nullable: true,
        description: undefined,
    })
    update?: CommentUpdateWithoutAuthorDataInput | null;

    @Field(() => CommentCreateWithoutAuthorInput, {
        nullable: true,
        description: undefined,
    })
    create?: CommentCreateWithoutAuthorInput | null;
}
