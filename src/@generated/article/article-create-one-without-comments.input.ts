import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateOrConnectWithoutcommentsInput } from './article-create-or-connect-withoutcomments.input';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleCreateOneWithoutCommentsInput {
    @Field(() => ArticleCreateWithoutCommentsInput, {
        nullable: true,
    })
    create?: ArticleCreateWithoutCommentsInput;

    @Field(() => ArticleCreateOrConnectWithoutcommentsInput, {
        nullable: true,
    })
    connectOrCreate?: ArticleCreateOrConnectWithoutcommentsInput;

    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
    })
    connect?: ArticleWhereUniqueInput;
}
