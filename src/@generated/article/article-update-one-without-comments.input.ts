import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateOrConnectWithoutcommentsInput } from './article-create-or-connect-withoutcomments.input';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';
import { ArticleUpdateWithoutCommentsInput } from './article-update-without-comments.input';
import { ArticleUpsertWithoutCommentsInput } from './article-upsert-without-comments.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleUpdateOneWithoutCommentsInput {
    @Field(() => ArticleCreateWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    create?: ArticleCreateWithoutCommentsInput;

    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    connect?: ArticleWhereUniqueInput;

    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    disconnect?: boolean;

    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    delete?: boolean;

    @Field(() => ArticleUpdateWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    update?: ArticleUpdateWithoutCommentsInput;

    @Field(() => ArticleUpsertWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    upsert?: ArticleUpsertWithoutCommentsInput;

    @Field(() => ArticleCreateOrConnectWithoutcommentsInput, {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?: ArticleCreateOrConnectWithoutcommentsInput;
}
