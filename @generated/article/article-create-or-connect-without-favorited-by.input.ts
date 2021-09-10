import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleCreateWithoutFavoritedByInput } from './article-create-without-favorited-by.input';

@InputType()
export class ArticleCreateOrConnectWithoutFavoritedByInput {
    @Field(() => ArticleWhereUniqueInput, { nullable: false })
    where!: ArticleWhereUniqueInput;

    @Field(() => ArticleCreateWithoutFavoritedByInput, { nullable: false })
    create!: ArticleCreateWithoutFavoritedByInput;
}
