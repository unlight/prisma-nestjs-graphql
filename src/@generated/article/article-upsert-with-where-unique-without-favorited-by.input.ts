import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateWithoutFavoritedByInput } from './article-create-without-favorited-by.input';
import { ArticleUpdateWithoutFavoritedByDataInput } from './article-update-without-favorited-by-data.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleUpsertWithWhereUniqueWithoutFavoritedByInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: ArticleWhereUniqueInput;

    @Field(() => ArticleUpdateWithoutFavoritedByDataInput, {
        nullable: true,
        description: undefined,
    })
    update?: ArticleUpdateWithoutFavoritedByDataInput;

    @Field(() => ArticleCreateWithoutFavoritedByInput, {
        nullable: true,
        description: undefined,
    })
    create?: ArticleCreateWithoutFavoritedByInput;
}
