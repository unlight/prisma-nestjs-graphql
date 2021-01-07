import { Field, Int, ObjectType } from '@nestjs/graphql';

import { ArticleAvgAggregate } from './article-avg-aggregate.output';
import { ArticleCountAggregate } from './article-count-aggregate.output';
import { ArticleMaxAggregate } from './article-max-aggregate.output';
import { ArticleMinAggregate } from './article-min-aggregate.output';
import { ArticleSumAggregate } from './article-sum-aggregate.output';

@ObjectType()
export class ArticleGroupBy {
    @Field(() => String, {
        nullable: true,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
    })
    slug?: string;

    @Field(() => String, {
        nullable: true,
    })
    title?: string;

    @Field(() => String, {
        nullable: true,
    })
    description?: string;

    @Field(() => String, {
        nullable: true,
    })
    body?: string;

    @Field(() => String, {
        nullable: true,
    })
    createdAt?: Date | string;

    @Field(() => String, {
        nullable: true,
    })
    updatedAt?: Date | string;

    @Field(() => Int, {
        nullable: true,
    })
    favoritesCount?: number;

    @Field(() => String, {
        nullable: true,
    })
    authorId?: string;

    @Field(() => Boolean, {
        nullable: true,
    })
    active?: boolean;

    @Field(() => ArticleCountAggregate, {
        nullable: true,
    })
    count?: ArticleCountAggregate;

    @Field(() => ArticleAvgAggregate, {
        nullable: true,
    })
    avg?: ArticleAvgAggregate;

    @Field(() => ArticleSumAggregate, {
        nullable: true,
    })
    sum?: ArticleSumAggregate;

    @Field(() => ArticleMinAggregate, {
        nullable: true,
    })
    min?: ArticleMinAggregate;

    @Field(() => ArticleMaxAggregate, {
        nullable: true,
    })
    max?: ArticleMaxAggregate;
}
