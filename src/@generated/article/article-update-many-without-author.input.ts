import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input';
import { ArticleScalarWhereInput } from './article-scalar-where.input';
import { ArticleUpdateManyWithWhereNestedInput } from './article-update-many-with-where-nested.input';
import { ArticleUpdateWithWhereUniqueWithoutAuthorInput } from './article-update-with-where-unique-without-author.input';
import { ArticleUpsertWithWhereUniqueWithoutAuthorInput } from './article-upsert-with-where-unique-without-author.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType({})
export class ArticleUpdateManyWithoutAuthorInput {
    @Field(() => [ArticleCreateWithoutAuthorInput], {
        nullable: true,
        description: undefined,
    })
    create?: ArticleCreateWithoutAuthorInput | ArticleCreateWithoutAuthorInput[] | null;

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

    @Field(() => [ArticleUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true,
        description: undefined,
    })
    update?:
        | ArticleUpdateWithWhereUniqueWithoutAuthorInput
        | ArticleUpdateWithWhereUniqueWithoutAuthorInput[]
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

    @Field(() => [ArticleUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true,
        description: undefined,
    })
    upsert?:
        | ArticleUpsertWithWhereUniqueWithoutAuthorInput
        | ArticleUpsertWithWhereUniqueWithoutAuthorInput[]
        | null;
}
