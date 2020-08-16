import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType({})
export class CommentCreateManyWithoutAuthorInput {
    @Field(() => [CommentCreateWithoutAuthorInput], {
        nullable: true,
        description: undefined,
    })
    create?: CommentCreateWithoutAuthorInput[] | null;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: CommentWhereUniqueInput[] | null;
}
