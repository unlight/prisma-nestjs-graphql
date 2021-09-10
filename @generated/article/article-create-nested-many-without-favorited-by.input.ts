import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutFavoritedByInput } from './article-create-without-favorited-by.input';
import { ArticleCreateOrConnectWithoutFavoritedByInput } from './article-create-or-connect-without-favorited-by.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleCreateNestedManyWithoutFavoritedByInput {
    @Field(() => [ArticleCreateWithoutFavoritedByInput], { nullable: true })
    create?: Array<ArticleCreateWithoutFavoritedByInput>;

    @Field(() => [ArticleCreateOrConnectWithoutFavoritedByInput], { nullable: true })
    connectOrCreate?: Array<ArticleCreateOrConnectWithoutFavoritedByInput>;

    @Field(() => [ArticleWhereUniqueInput], { nullable: true })
    connect?: Array<ArticleWhereUniqueInput>;
}
