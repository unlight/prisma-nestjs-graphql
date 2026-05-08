import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ArticleCountAggregate } from './article-count-aggregate.output.ts';
import { ArticleAvgAggregate } from './article-avg-aggregate.output.ts';
import { ArticleSumAggregate } from './article-sum-aggregate.output.ts';
import { ArticleMinAggregate } from './article-min-aggregate.output.ts';
import { ArticleMaxAggregate } from './article-max-aggregate.output.ts';

@ObjectType()
export class ArticleGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  slug!: string;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => String, { nullable: false })
  body!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => Int, { nullable: false })
  favoritesCount!: number;

  @Field(() => String, { nullable: false })
  authorId!: string;

  @Field(() => Boolean, { nullable: true })
  active?: boolean;

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
