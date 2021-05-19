import { Field, ObjectType } from '@nestjs/graphql';

import { ArticleAvgAggregate } from './article-avg-aggregate.output';
import { ArticleCountAggregate } from './article-count-aggregate.output';
import { ArticleMaxAggregate } from './article-max-aggregate.output';
import { ArticleMinAggregate } from './article-min-aggregate.output';
import { ArticleSumAggregate } from './article-sum-aggregate.output';

@ObjectType()
export class AggregateArticle {
    @Field(() => ArticleCountAggregate, { nullable: true })
    count?: ArticleCountAggregate;
    @Field(() => ArticleAvgAggregate, { nullable: true })
    avg?: ArticleAvgAggregate;
    @Field(() => ArticleSumAggregate, { nullable: true })
    sum?: ArticleSumAggregate;
    @Field(() => ArticleMinAggregate, { nullable: true })
    min?: ArticleMinAggregate;
    @Field(() => ArticleMaxAggregate, { nullable: true })
    max?: ArticleMaxAggregate;
    @Field(() => ArticleCountAggregate, { nullable: true })
    _count?: ArticleCountAggregate;

    @Field(() => ArticleAvgAggregate, { nullable: true })
    _avg?: ArticleAvgAggregate;

    @Field(() => ArticleSumAggregate, { nullable: true })
    _sum?: ArticleSumAggregate;

    @Field(() => ArticleMinAggregate, { nullable: true })
    _min?: ArticleMinAggregate;

    @Field(() => ArticleMaxAggregate, { nullable: true })
    _max?: ArticleMaxAggregate;
}
