import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input';
import { ArticleOrderByWithRelationAndSearchRelevanceInput } from './article-order-by-with-relation-and-search-relevance.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ArticleScalarFieldEnum } from './article-scalar-field.enum';

@ArgsType()
export class FindManyArticleArgs {
    @Field(() => ArticleWhereInput, { nullable: true })
    where?: ArticleWhereInput;

    @Field(() => [ArticleOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true,
    })
    orderBy?: Array<ArticleOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => ArticleWhereUniqueInput, { nullable: true })
    cursor?: ArticleWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => [ArticleScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof ArticleScalarFieldEnum>;
}
