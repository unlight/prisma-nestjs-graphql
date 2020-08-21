import { InputType, Field } from '@nestjs/graphql';
import { ArticleUpdateOneWithoutCommentsInput } from '../article/article-update-one-without-comments.input';

@InputType({})
export class CommentUpdateWithoutAuthorDataInput {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    id?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    createdAt?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    updatedAt?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    body?: string | null;

    @Field(() => ArticleUpdateOneWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    article?: ArticleUpdateOneWithoutCommentsInput | null;
}
