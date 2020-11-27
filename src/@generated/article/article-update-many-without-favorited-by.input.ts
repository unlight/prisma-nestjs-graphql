import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateOrConnectWithoutfavoritedByInput } from './article-create-or-connect-withoutfavorited-by.input';
import { ArticleCreateWithoutFavoritedByInput } from './article-create-without-favorited-by.input';
import { ArticleScalarWhereInput } from './article-scalar-where.input';
import { ArticleUpdateManyWithWhereWithoutFavoritedByInput } from './article-update-many-with-where-without-favorited-by.input';
import { ArticleUpdateWithWhereUniqueWithoutFavoritedByInput } from './article-update-with-where-unique-without-favorited-by.input';
import { ArticleUpsertWithWhereUniqueWithoutFavoritedByInput } from './article-upsert-with-where-unique-without-favorited-by.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleUpdateManyWithoutFavoritedByInput {
    @Field(() => [ArticleCreateWithoutFavoritedByInput], {
        nullable: true,
    })
    create?: ArticleCreateWithoutFavoritedByInput | Array<ArticleCreateWithoutFavoritedByInput>;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
    })
    connect?: ArticleWhereUniqueInput | Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
    })
    set?: ArticleWhereUniqueInput | Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
    })
    disconnect?: ArticleWhereUniqueInput | Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
    })
    delete?: ArticleWhereUniqueInput | Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleUpdateWithWhereUniqueWithoutFavoritedByInput], {
        nullable: true,
    })
    update?:
        | ArticleUpdateWithWhereUniqueWithoutFavoritedByInput
        | Array<ArticleUpdateWithWhereUniqueWithoutFavoritedByInput>;

    @Field(() => [ArticleUpdateManyWithWhereWithoutFavoritedByInput], {
        nullable: true,
    })
    updateMany?:
        | ArticleUpdateManyWithWhereWithoutFavoritedByInput
        | Array<ArticleUpdateManyWithWhereWithoutFavoritedByInput>;

    @Field(() => [ArticleScalarWhereInput], {
        nullable: true,
    })
    deleteMany?: ArticleScalarWhereInput | Array<ArticleScalarWhereInput>;

    @Field(() => [ArticleUpsertWithWhereUniqueWithoutFavoritedByInput], {
        nullable: true,
    })
    upsert?:
        | ArticleUpsertWithWhereUniqueWithoutFavoritedByInput
        | Array<ArticleUpsertWithWhereUniqueWithoutFavoritedByInput>;

    @Field(() => [ArticleCreateOrConnectWithoutfavoritedByInput], {
        nullable: true,
    })
    connectOrCreate?:
        | ArticleCreateOrConnectWithoutfavoritedByInput
        | Array<ArticleCreateOrConnectWithoutfavoritedByInput>;
}
