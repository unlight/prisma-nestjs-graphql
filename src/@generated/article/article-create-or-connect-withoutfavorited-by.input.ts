import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateWithoutFavoritedByInput } from './article-create-without-favorited-by.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleCreateOrConnectWithoutfavoritedByInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
    })
    where?: ArticleWhereUniqueInput;

    @Field(() => ArticleCreateWithoutFavoritedByInput, {
        nullable: true,
    })
    create?: ArticleCreateWithoutFavoritedByInput;
}
