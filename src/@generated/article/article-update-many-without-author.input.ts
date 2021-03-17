import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateManyAuthorInputEnvelope } from './article-create-many-author-input-envelope.input';
import { ArticleCreateOrConnectWithoutAuthorInput } from './article-create-or-connect-without-author.input';
import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input';
import { ArticleScalarWhereInput } from './article-scalar-where.input';
import { ArticleUpdateManyWithWhereWithoutAuthorInput } from './article-update-many-with-where-without-author.input';
import { ArticleUpdateWithWhereUniqueWithoutAuthorInput } from './article-update-with-where-unique-without-author.input';
import { ArticleUpsertWithWhereUniqueWithoutAuthorInput } from './article-upsert-with-where-unique-without-author.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleUpdateManyWithoutAuthorInput {
    @Field(() => [ArticleCreateWithoutAuthorInput], { nullable: true })
    create?: Array<ArticleCreateWithoutAuthorInput>;

    @Field(() => [ArticleCreateOrConnectWithoutAuthorInput], { nullable: true })
    connectOrCreate?: Array<ArticleCreateOrConnectWithoutAuthorInput>;

    @Field(() => [ArticleUpsertWithWhereUniqueWithoutAuthorInput], { nullable: true })
    upsert?: Array<ArticleUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => ArticleCreateManyAuthorInputEnvelope, { nullable: true })
    createMany?: ArticleCreateManyAuthorInputEnvelope;

    @Field(() => [ArticleWhereUniqueInput], { nullable: true })
    connect?: Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], { nullable: true })
    set?: Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], { nullable: true })
    disconnect?: Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleWhereUniqueInput], { nullable: true })
    delete?: Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleUpdateWithWhereUniqueWithoutAuthorInput], { nullable: true })
    update?: Array<ArticleUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [ArticleUpdateManyWithWhereWithoutAuthorInput], { nullable: true })
    updateMany?: Array<ArticleUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [ArticleScalarWhereInput], { nullable: true })
    deleteMany?: Array<ArticleScalarWhereInput>;
}
