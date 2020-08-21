import { InputType, Field } from '@nestjs/graphql';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithoutAuthorDataInput } from './comment-update-without-author-data.input';

@InputType({})
export class CommentUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => CommentWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: CommentWhereUniqueInput | null;

    @Field(() => CommentUpdateWithoutAuthorDataInput, {
        nullable: true,
        description: undefined,
    })
    data?: CommentUpdateWithoutAuthorDataInput | null;
}
