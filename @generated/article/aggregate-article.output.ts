import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ArticleCountAggregate } from './article-count-aggregate.output.ts';
import { ArticleAvgAggregate } from './article-avg-aggregate.output.ts';
import { ArticleSumAggregate } from './article-sum-aggregate.output.ts';
import { ArticleMinAggregate } from './article-min-aggregate.output.ts';
import { ArticleMaxAggregate } from './article-max-aggregate.output.ts';

@ObjectType()
export class AggregateArticle {
  @Field(() => ArticleCountAggregate, { nullable: true })
  _count?: Identity<ArticleCountAggregate>;

  @Field(() => ArticleAvgAggregate, { nullable: true })
  _avg?: Identity<ArticleAvgAggregate>;

  @Field(() => ArticleSumAggregate, { nullable: true })
  _sum?: Identity<ArticleSumAggregate>;

  @Field(() => ArticleMinAggregate, { nullable: true })
  _min?: Identity<ArticleMinAggregate>;

  @Field(() => ArticleMaxAggregate, { nullable: true })
  _max?: Identity<ArticleMaxAggregate>;
}
