import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';
import { ArticleUpdateWithoutCommentsDataInput } from './article-update-without-comments-data.input';
import { ArticleUpsertWithoutCommentsInput } from './article-upsert-without-comments.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType({})
export class ArticleUpdateOneWithoutCommentsInput {
    @Field(() => ArticleCreateWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    create?: ArticleCreateWithoutCommentsInput | null;

    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    connect?: ArticleWhereUniqueInput | null;

    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    disconnect?: boolean | null;

    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    delete?: boolean | null;

    @Field(() => ArticleUpdateWithoutCommentsDataInput, {
        nullable: true,
        description: undefined,
    })
    update?: ArticleUpdateWithoutCommentsDataInput | null;

    @Field(() => ArticleUpsertWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    upsert?: ArticleUpsertWithoutCommentsInput | null;
}
