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
    })
    create?: Array<ArticleCreateWithoutAuthorInput>;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
    })
    connect?: Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
    })
    set?: Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
    })
    disconnect?: Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
    })
    delete?: Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true,
    })
    update?: Array<ArticleUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [ArticleUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true,
    })
    updateMany?: Array<ArticleUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [ArticleScalarWhereInput], {
        nullable: true,
    })
    deleteMany?: Array<ArticleScalarWhereInput>;

    @Field(() => [ArticleUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true,
    })
    upsert?: Array<ArticleUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [ArticleCreateOrConnectWithoutauthorInput], {
        nullable: true,
    })
    connectOrCreate?: Array<ArticleCreateOrConnectWithoutauthorInput>;
}
