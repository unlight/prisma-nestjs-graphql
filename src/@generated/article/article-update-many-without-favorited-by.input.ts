import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateWithoutFavoritedByInput } from './article-create-without-favorited-by.input';
import { ArticleScalarWhereInput } from './article-scalar-where.input';
import { ArticleUpdateManyWithWhereNestedInput } from './article-update-many-with-where-nested.input';
import { ArticleUpdateWithWhereUniqueWithoutFavoritedByInput } from './article-update-with-where-unique-without-favorited-by.input';
import { ArticleUpsertWithWhereUniqueWithoutFavoritedByInput } from './article-upsert-with-where-unique-without-favorited-by.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType({})
export class ArticleUpdateManyWithoutFavoritedByInput {
    @Field(() => [ArticleCreateWithoutFavoritedByInput], {
        nullable: true,
        description: undefined,
    })
    create?: ArticleCreateWithoutFavoritedByInput[] | null;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: ArticleWhereUniqueInput[] | null;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    set?: ArticleWhereUniqueInput[] | null;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    disconnect?: ArticleWhereUniqueInput[] | null;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    delete?: ArticleWhereUniqueInput[] | null;

    @Field(() => [ArticleUpdateWithWhereUniqueWithoutFavoritedByInput], {
        nullable: true,
        description: undefined,
    })
    update?: ArticleUpdateWithWhereUniqueWithoutFavoritedByInput[] | null;

    @Field(() => [ArticleUpdateManyWithWhereNestedInput], {
        nullable: true,
        description: undefined,
    })
    updateMany?: ArticleUpdateManyWithWhereNestedInput[] | null;

    @Field(() => [ArticleScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    deleteMany?: ArticleScalarWhereInput[] | null;

    @Field(() => [ArticleUpsertWithWhereUniqueWithoutFavoritedByInput], {
        nullable: true,
        description: undefined,
    })
    upsert?: ArticleUpsertWithWhereUniqueWithoutFavoritedByInput[] | null;
}
