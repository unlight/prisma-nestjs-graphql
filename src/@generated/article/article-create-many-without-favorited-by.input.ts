import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateWithoutFavoritedByInput } from './article-create-without-favorited-by.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType({})
export class ArticleCreateManyWithoutFavoritedByInput {
    @Field(() => [ArticleCreateWithoutFavoritedByInput], {
        nullable: true,
        description: undefined,
    })
    create?: ArticleCreateWithoutFavoritedByInput[] | null;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: ArticleWhereUniqueInput[] | null;
}
