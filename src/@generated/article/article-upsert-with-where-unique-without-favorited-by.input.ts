import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateWithoutFavoritedByInput } from './article-create-without-favorited-by.input';
import { ArticleUpdateWithoutFavoritedByInput } from './article-update-without-favorited-by.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleUpsertWithWhereUniqueWithoutFavoritedByInput {
    @Field(() => ArticleWhereUniqueInput, { nullable: false })
    where!: ArticleWhereUniqueInput;

    @Field(() => ArticleUpdateWithoutFavoritedByInput, { nullable: false })
    update!: ArticleUpdateWithoutFavoritedByInput;

    @Field(() => ArticleCreateWithoutFavoritedByInput, { nullable: false })
    create!: ArticleCreateWithoutFavoritedByInput;
}
