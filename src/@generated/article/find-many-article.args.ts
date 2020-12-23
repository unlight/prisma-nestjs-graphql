import { ArgsType, Field, Int } from '@nestjs/graphql';

import { ArticleOrderByInput } from './article-order-by.input';
import { ArticleScalarFieldEnum } from './article-scalar-field.enum';
import { ArticleWhereInput } from './article-where.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@ArgsType()
export class FindManyArticleArgs {
    @Field(() => ArticleWhereInput, {
        nullable: true,
    })
    where?: ArticleWhereInput;

    @Field(() => [ArticleOrderByInput], {
        nullable: true,
    })
    orderBy?: Array<ArticleOrderByInput> | ArticleOrderByInput;

    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
    })
    cursor?: ArticleWhereUniqueInput;

    @Field(() => Int, {
        nullable: true,
    })
    take?: number;

    @Field(() => Int, {
        nullable: true,
    })
    skip?: number;

    @Field(() => [ArticleScalarFieldEnum], {
        nullable: true,
    })
    distinct?: Array<ArticleScalarFieldEnum>;
}
