import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateOneWithoutCommentsInput } from '../article/article-create-one-without-comments.input';

@InputType({})
export class CommentCreateWithoutAuthorInput {
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

    @Field(() => ArticleCreateOneWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    article?: ArticleCreateOneWithoutCommentsInput | null;
}
