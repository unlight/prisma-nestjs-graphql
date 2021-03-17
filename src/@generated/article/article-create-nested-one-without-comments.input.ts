import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateOrConnectWithoutCommentsInput } from './article-create-or-connect-without-comments.input';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleCreateNestedOneWithoutCommentsInput {
    @Field(() => ArticleCreateWithoutCommentsInput, { nullable: true })
    create?: ArticleCreateWithoutCommentsInput;

    @Field(() => ArticleCreateOrConnectWithoutCommentsInput, { nullable: true })
    connectOrCreate?: ArticleCreateOrConnectWithoutCommentsInput;

    @Field(() => ArticleWhereUniqueInput, { nullable: true })
    connect?: ArticleWhereUniqueInput;
}
