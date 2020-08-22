import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateWithoutTagsInput } from './article-create-without-tags.input';
import { ArticleScalarWhereInput } from './article-scalar-where.input';
import { ArticleUpdateManyWithWhereNestedInput } from './article-update-many-with-where-nested.input';
import { ArticleUpdateWithWhereUniqueWithoutTagsInput } from './article-update-with-where-unique-without-tags.input';
import { ArticleUpsertWithWhereUniqueWithoutTagsInput } from './article-upsert-with-where-unique-without-tags.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType({})
export class ArticleUpdateManyWithoutTagsInput {
    @Field(() => [ArticleCreateWithoutTagsInput], {
        nullable: true,
        description: undefined,
    })
    create?: ArticleCreateWithoutTagsInput | ArticleCreateWithoutTagsInput[] | null;

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

    @Field(() => [ArticleUpdateWithWhereUniqueWithoutTagsInput], {
        nullable: true,
        description: undefined,
    })
    update?:
        | ArticleUpdateWithWhereUniqueWithoutTagsInput
        | ArticleUpdateWithWhereUniqueWithoutTagsInput[]
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

    @Field(() => [ArticleUpsertWithWhereUniqueWithoutTagsInput], {
        nullable: true,
        description: undefined,
    })
    upsert?:
        | ArticleUpsertWithWhereUniqueWithoutTagsInput
        | ArticleUpsertWithWhereUniqueWithoutTagsInput[]
        | null;
}
