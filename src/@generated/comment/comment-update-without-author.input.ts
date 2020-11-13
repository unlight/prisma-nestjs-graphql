import { Field, InputType } from '@nestjs/graphql';

import { ArticleUpdateOneWithoutCommentsInput } from '../article/article-update-one-without-comments.input';

@InputType()
export class CommentUpdateWithoutAuthorInput {
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

    @Field(() => ArticleUpdateOneWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    article?: ArticleUpdateOneWithoutCommentsInput;
}
