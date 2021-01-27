import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleCreateOrConnectWithoutcommentsInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: false,
    })
    where!: ArticleWhereUniqueInput;

    @Field(() => ArticleCreateWithoutCommentsInput, {
        nullable: false,
    })
    create!: ArticleCreateWithoutCommentsInput;
}
