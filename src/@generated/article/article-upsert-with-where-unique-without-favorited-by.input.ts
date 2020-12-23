import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateWithoutFavoritedByInput } from './article-create-without-favorited-by.input';
import { ArticleUpdateWithoutFavoritedByInput } from './article-update-without-favorited-by.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleUpsertWithWhereUniqueWithoutFavoritedByInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
    })
    where?: ArticleWhereUniqueInput;

    @Field(() => ArticleUpdateWithoutFavoritedByInput, {
        nullable: true,
    })
    update?: ArticleUpdateWithoutFavoritedByInput;

    @Field(() => ArticleCreateWithoutFavoritedByInput, {
        nullable: true,
    })
    create?: ArticleCreateWithoutFavoritedByInput;
}
