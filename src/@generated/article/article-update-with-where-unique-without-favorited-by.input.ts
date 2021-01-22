import { Field, InputType } from '@nestjs/graphql';

import { ArticleUncheckedUpdateWithoutFavoritedByInput } from './article-unchecked-update-without-favorited-by.input';
import { ArticleUpdateWithoutFavoritedByInput } from './article-update-without-favorited-by.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleUpdateWithWhereUniqueWithoutFavoritedByInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: false,
    })
    where!: ArticleWhereUniqueInput;

    @Field(() => ArticleUpdateWithoutFavoritedByInput, {
        nullable: false,
    })
    data!:
        | ArticleUpdateWithoutFavoritedByInput
        | ArticleUncheckedUpdateWithoutFavoritedByInput;
}
