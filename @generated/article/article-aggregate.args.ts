import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input.ts';
import { Type } from 'class-transformer';
import { ArticleOrderByWithRelationInput } from './article-order-by-with-relation.input.ts';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input.ts';
import { Int } from '@nestjs/graphql';
import { ArticleCountAggregateInput } from './article-count-aggregate.input.ts';
import { ArticleAvgAggregateInput } from './article-avg-aggregate.input.ts';
import { ArticleSumAggregateInput } from './article-sum-aggregate.input.ts';
import { ArticleMinAggregateInput } from './article-min-aggregate.input.ts';
import { ArticleMaxAggregateInput } from './article-max-aggregate.input.ts';

@ArgsType()
export class ArticleAggregateArgs {
  @Field(() => ArticleWhereInput, { nullable: true })
  @Type(() => ArticleWhereInput)
  where?: ArticleWhereInput;

  @Field(() => [ArticleOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ArticleOrderByWithRelationInput>;

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
