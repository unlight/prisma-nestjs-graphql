import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateOrConnectWithouttagsInput } from './article-create-or-connect-withouttags.input';
import { ArticleCreateWithoutTagsInput } from './article-create-without-tags.input';
import { ArticleScalarWhereInput } from './article-scalar-where.input';
import { ArticleUpdateManyWithWhereWithoutTagsInput } from './article-update-many-with-where-without-tags.input';
import { ArticleUpdateWithWhereUniqueWithoutTagsInput } from './article-update-with-where-unique-without-tags.input';
import { ArticleUpsertWithWhereUniqueWithoutTagsInput } from './article-upsert-with-where-unique-without-tags.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleUpdateManyWithoutTagsInput {
    @Field(() => [ArticleCreateWithoutTagsInput], {
        nullable: true,
        description: undefined,
    })
    create?: ArticleCreateWithoutTagsInput | Array<ArticleCreateWithoutTagsInput>;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: ArticleWhereUniqueInput | Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    set?: ArticleWhereUniqueInput | Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    disconnect?: ArticleWhereUniqueInput | Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    delete?: ArticleWhereUniqueInput | Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleUpdateWithWhereUniqueWithoutTagsInput], {
        nullable: true,
        description: undefined,
    })
    update?:
        | ArticleUpdateWithWhereUniqueWithoutTagsInput
        | Array<ArticleUpdateWithWhereUniqueWithoutTagsInput>;

    @Field(() => [ArticleUpdateManyWithWhereWithoutTagsInput], {
        nullable: true,
        description: undefined,
    })
    updateMany?:
        | ArticleUpdateManyWithWhereWithoutTagsInput
        | Array<ArticleUpdateManyWithWhereWithoutTagsInput>;

    @Field(() => [ArticleScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    deleteMany?: ArticleScalarWhereInput | Array<ArticleScalarWhereInput>;

    @Field(() => [ArticleUpsertWithWhereUniqueWithoutTagsInput], {
        nullable: true,
        description: undefined,
    })
    upsert?:
        | ArticleUpsertWithWhereUniqueWithoutTagsInput
        | Array<ArticleUpsertWithWhereUniqueWithoutTagsInput>;

    @Field(() => [ArticleCreateOrConnectWithouttagsInput], {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?:
        | ArticleCreateOrConnectWithouttagsInput
        | Array<ArticleCreateOrConnectWithouttagsInput>;
}
