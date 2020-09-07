import { Field, InputType } from '@nestjs/graphql';

import { ArticleUpdateOneWithoutCommentsInput } from '../article/article-update-one-without-comments.input';
import { UserUpdateOneRequiredWithoutCommentsInput } from '../user/user-update-one-required-without-comments.input';

@InputType()
export class CommentUpdateInput {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    createdAt?: Date | string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    updatedAt?: Date | string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    body?: string;

    @Field(() => UserUpdateOneRequiredWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    author?: UserUpdateOneRequiredWithoutCommentsInput;

    @Field(() => ArticleUpdateOneWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    article?: ArticleUpdateOneWithoutCommentsInput | null;
}
