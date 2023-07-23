import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input';
import { Type } from 'class-transformer';
import { ArticleOrderByWithRelationAndSearchRelevanceInput } from './article-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ArticleCountAggregateInput } from './article-count-aggregate.input';
import { ArticleAvgAggregateInput } from './article-avg-aggregate.input';
import { ArticleSumAggregateInput } from './article-sum-aggregate.input';
import { ArticleMinAggregateInput } from './article-min-aggregate.input';
import { ArticleMaxAggregateInput } from './article-max-aggregate.input';

@ArgsType()
export class ArticleAggregateArgs {
  @Field(() => ArticleWhereInput, { nullable: true })
  @Type(() => ArticleWhereInput)
  where?: ArticleWhereInput;

  @Field(() => [ArticleOrderByWithRelationAndSearchRelevanceInput], { nullable: true })
  orderBy?: Array<ArticleOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => ArticleWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'slug'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => ArticleCountAggregateInput, { nullable: true })
  _count?: ArticleCountAggregateInput;

  @Field(() => ArticleAvgAggregateInput, { nullable: true })
  _avg?: ArticleAvgAggregateInput;

  @Field(() => ArticleSumAggregateInput, { nullable: true })
  _sum?: ArticleSumAggregateInput;

  @Field(() => ArticleMinAggregateInput, { nullable: true })
  _min?: ArticleMinAggregateInput;

  @Field(() => ArticleMaxAggregateInput, { nullable: true })
  _max?: ArticleMaxAggregateInput;
}
