import { Field, Int, ObjectType } from '@nestjs/graphql';

import { ArticleAvgAggregate } from './article-avg-aggregate.output';
import { ArticleMaxAggregate } from './article-max-aggregate.output';
import { ArticleMinAggregate } from './article-min-aggregate.output';
import { ArticleSumAggregate } from './article-sum-aggregate.output';

@ObjectType()
export class AggregateArticle {
    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    count?: number | null;

    @Field(() => ArticleAvgAggregate, {
        nullable: true,
        description: undefined,
    })
    avg?: ArticleAvgAggregate | null;

    @Field(() => ArticleSumAggregate, {
        nullable: true,
        description: undefined,
    })
    sum?: ArticleSumAggregate | null;

    @Field(() => ArticleMinAggregate, {
        nullable: true,
        description: undefined,
    })
    min?: ArticleMinAggregate | null;

    @Field(() => ArticleMaxAggregate, {
        nullable: true,
        description: undefined,
    })
    max?: ArticleMaxAggregate | null;
}
