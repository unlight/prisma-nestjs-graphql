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
    create?: ArticleCreateWithoutFavoritedByInput | ArticleCreateWithoutFavoritedByInput[] | null;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[] | null;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[] | null;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[] | null;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[] | null;

    @Field(() => [ArticleUpdateWithWhereUniqueWithoutFavoritedByInput], {
        nullable: true,
        description: undefined,
    })
    update?:
        | ArticleUpdateWithWhereUniqueWithoutFavoritedByInput
        | ArticleUpdateWithWhereUniqueWithoutFavoritedByInput[]
        | null;

    @Field(() => [ArticleUpdateManyWithWhereNestedInput], {
        nullable: true,
        description: undefined,
    })
    updateMany?:
        | ArticleUpdateManyWithWhereNestedInput
        | ArticleUpdateManyWithWhereNestedInput[]
        | null;

    @Field(() => [ArticleScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[] | null;

    @Field(() => [ArticleUpsertWithWhereUniqueWithoutFavoritedByInput], {
        nullable: true,
        description: undefined,
    })
    upsert?:
        | ArticleUpsertWithWhereUniqueWithoutFavoritedByInput
        | ArticleUpsertWithWhereUniqueWithoutFavoritedByInput[]
        | null;
}
