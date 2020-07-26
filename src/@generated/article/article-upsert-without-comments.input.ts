import { InputType, Field } from '@nestjs/graphql';
import { ArticleUpdateWithoutCommentsDataInput } from './article-update-without-comments-data.input';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';

@InputType({})
export class ArticleUpsertWithoutCommentsInput {
    @Field(() => ArticleUpdateWithoutCommentsDataInput, {
        nullable: true,
        description: undefined,
    })
    update?: ArticleUpdateWithoutCommentsDataInput | null;

    @Field(() => ArticleCreateWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    create?: ArticleCreateWithoutCommentsInput | null;
}
