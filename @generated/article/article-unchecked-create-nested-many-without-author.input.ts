import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input';
import { ArticleCreateOrConnectWithoutAuthorInput } from './article-create-or-connect-without-author.input';
import { ArticleCreateManyAuthorInputEnvelope } from './article-create-many-author-input-envelope.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleUncheckedCreateNestedManyWithoutAuthorInput {
    @Field(() => [ArticleCreateWithoutAuthorInput], { nullable: true })
    create?: Array<ArticleCreateWithoutAuthorInput>;

    @Field(() => [ArticleCreateOrConnectWithoutAuthorInput], { nullable: true })
    connectOrCreate?: Array<ArticleCreateOrConnectWithoutAuthorInput>;

    @Field(() => ArticleCreateManyAuthorInputEnvelope, { nullable: true })
    createMany?: ArticleCreateManyAuthorInputEnvelope;

    @Field(() => [ArticleWhereUniqueInput], { nullable: true })
    connect?: Array<ArticleWhereUniqueInput>;
}
