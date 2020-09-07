import { Field, InputType } from '@nestjs/graphql';

import { ArticleUpdateWithoutFavoritedByDataInput } from './article-update-without-favorited-by-data.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleUpdateWithWhereUniqueWithoutFavoritedByInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: ArticleWhereUniqueInput;

    @Field(() => ArticleUpdateWithoutFavoritedByDataInput, {
        nullable: true,
        description: undefined,
    })
    data?: ArticleUpdateWithoutFavoritedByDataInput;
}
