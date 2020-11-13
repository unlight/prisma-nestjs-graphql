import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateOrConnectWithoutauthorInput } from './article-create-or-connect-withoutauthor.input';
import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input';
import { ArticleScalarWhereInput } from './article-scalar-where.input';
import { ArticleUpdateManyWithWhereWithoutAuthorInput } from './article-update-many-with-where-without-author.input';
import { ArticleUpdateWithWhereUniqueWithoutAuthorInput } from './article-update-with-where-unique-without-author.input';
import { ArticleUpsertWithWhereUniqueWithoutAuthorInput } from './article-upsert-with-where-unique-without-author.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleUpdateManyWithoutAuthorInput {
    @Field(() => [ArticleCreateWithoutAuthorInput], {
        nullable: true,
        description: undefined,
    })
    create?: ArticleCreateWithoutAuthorInput | Array<ArticleCreateWithoutAuthorInput>;

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

    @Field(() => [ArticleUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true,
        description: undefined,
    })
    update?:
        | ArticleUpdateWithWhereUniqueWithoutAuthorInput
        | Array<ArticleUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [ArticleUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true,
        description: undefined,
    })
    updateMany?:
        | ArticleUpdateManyWithWhereWithoutAuthorInput
        | Array<ArticleUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [ArticleScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    deleteMany?: ArticleScalarWhereInput | Array<ArticleScalarWhereInput>;

    @Field(() => [ArticleUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true,
        description: undefined,
    })
    upsert?:
        | ArticleUpsertWithWhereUniqueWithoutAuthorInput
        | Array<ArticleUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [ArticleCreateOrConnectWithoutauthorInput], {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?:
        | ArticleCreateOrConnectWithoutauthorInput
        | Array<ArticleCreateOrConnectWithoutauthorInput>;
}
