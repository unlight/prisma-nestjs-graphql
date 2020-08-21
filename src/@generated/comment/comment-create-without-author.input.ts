import { InputType, Field } from '@nestjs/graphql';
import { ArticleCreateOneWithoutCommentsInput } from '../article/article-create-one-without-comments.input';

@InputType({})
export class CommentCreateWithoutAuthorInput {
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

    @Field(() => ArticleCreateOneWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    article?: ArticleCreateOneWithoutCommentsInput | null;
}
