import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithoutFavoritedByInput } from './article-update-without-favorited-by.input';
import { ArticleCreateWithoutFavoritedByInput } from './article-create-without-favorited-by.input';

@InputType()
export class ArticleUpsertWithWhereUniqueWithoutFavoritedByInput {
    @Field(() => ArticleWhereUniqueInput, { nullable: false })
    where!: ArticleWhereUniqueInput;

    @Field(() => ArticleUpdateWithoutFavoritedByInput, { nullable: false })
    update!: ArticleUpdateWithoutFavoritedByInput;

    @Field(() => ArticleCreateWithoutFavoritedByInput, { nullable: false })
    create!: ArticleCreateWithoutFavoritedByInput;
}
