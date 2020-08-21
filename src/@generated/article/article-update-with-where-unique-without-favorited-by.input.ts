import { InputType, Field } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithoutFavoritedByDataInput } from './article-update-without-favorited-by-data.input';

@InputType({})
export class ArticleUpdateWithWhereUniqueWithoutFavoritedByInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: ArticleWhereUniqueInput | null;

    @Field(() => ArticleUpdateWithoutFavoritedByDataInput, {
        nullable: true,
        description: undefined,
    })
    data?: ArticleUpdateWithoutFavoritedByDataInput | null;
}
