import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithoutFavoritedByInput } from './article-update-without-favorited-by.input';

@InputType()
export class ArticleUpdateWithWhereUniqueWithoutFavoritedByInput {
    @Field(() => ArticleWhereUniqueInput, { nullable: false })
    where!: ArticleWhereUniqueInput;

    @Field(() => ArticleUpdateWithoutFavoritedByInput, { nullable: false })
    data!: ArticleUpdateWithoutFavoritedByInput;
}
