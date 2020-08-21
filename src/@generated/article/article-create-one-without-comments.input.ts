import { InputType, Field } from '@nestjs/graphql';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType({})
export class ArticleCreateOneWithoutCommentsInput {
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
}
