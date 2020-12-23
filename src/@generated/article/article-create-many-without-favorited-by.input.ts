import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateOrConnectWithoutfavoritedByInput } from './article-create-or-connect-withoutfavorited-by.input';
import { ArticleCreateWithoutFavoritedByInput } from './article-create-without-favorited-by.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleCreateManyWithoutFavoritedByInput {
    @Field(() => [ArticleCreateWithoutFavoritedByInput], {
        nullable: true,
    })
    create?:
        | ArticleCreateWithoutFavoritedByInput
        | Array<ArticleCreateWithoutFavoritedByInput>;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
    })
    connect?: ArticleWhereUniqueInput | Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleCreateOrConnectWithoutfavoritedByInput], {
        nullable: true,
    })
    connectOrCreate?:
        | ArticleCreateOrConnectWithoutfavoritedByInput
        | Array<ArticleCreateOrConnectWithoutfavoritedByInput>;
}
