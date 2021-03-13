import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateOrConnectWithoutCommentsInput } from './article-create-or-connect-without-comments.input';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';
import { ArticleUpdateWithoutCommentsInput } from './article-update-without-comments.input';
import { ArticleUpsertWithoutCommentsInput } from './article-upsert-without-comments.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleUpdateOneWithoutCommentsInput {
    @Field(() => ArticleCreateWithoutCommentsInput, { nullable: true })
    create?: ArticleCreateWithoutCommentsInput;

    @Field(() => ArticleCreateOrConnectWithoutCommentsInput, { nullable: true })
    connectOrCreate?: ArticleCreateOrConnectWithoutCommentsInput;

    @Field(() => ArticleUpsertWithoutCommentsInput, { nullable: true })
    upsert?: ArticleUpsertWithoutCommentsInput;

    @Field(() => ArticleWhereUniqueInput, { nullable: true })
    connect?: ArticleWhereUniqueInput;

    @Field(() => Boolean, { nullable: true })
    disconnect?: boolean;

    @Field(() => Boolean, { nullable: true })
    delete?: boolean;

    @Field(() => ArticleUpdateWithoutCommentsInput, { nullable: true })
    update?: ArticleUpdateWithoutCommentsInput;
}
