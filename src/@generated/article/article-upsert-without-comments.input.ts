import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';
import { ArticleUpdateWithoutCommentsDataInput } from './article-update-without-comments-data.input';

@InputType()
export class ArticleUpsertWithoutCommentsInput {
    @Field(() => ArticleUpdateWithoutCommentsDataInput, {
        nullable: true,
        description: undefined,
    })
    update?: ArticleUpdateWithoutCommentsDataInput;

    @Field(() => ArticleCreateWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    create?: ArticleCreateWithoutCommentsInput;
}
