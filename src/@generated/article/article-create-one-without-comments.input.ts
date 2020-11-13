import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateOrConnectWithoutcommentsInput } from './article-create-or-connect-withoutcomments.input';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleCreateOneWithoutCommentsInput {
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

    @Field(() => ArticleCreateOrConnectWithoutcommentsInput, {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?: ArticleCreateOrConnectWithoutcommentsInput;
}
