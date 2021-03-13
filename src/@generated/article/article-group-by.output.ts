import { Field, Int, ObjectType } from '@nestjs/graphql';

import { ArticleAvgAggregate } from './article-avg-aggregate.output';
import { ArticleCountAggregate } from './article-count-aggregate.output';
import { ArticleMaxAggregate } from './article-max-aggregate.output';
import { ArticleMinAggregate } from './article-min-aggregate.output';
import { ArticleSumAggregate } from './article-sum-aggregate.output';

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
    count?: ArticleCountAggregate;

    @Field(() => ArticleAvgAggregate, { nullable: true })
    avg?: ArticleAvgAggregate;

    @Field(() => ArticleSumAggregate, { nullable: true })
    sum?: ArticleSumAggregate;

    @Field(() => ArticleMinAggregate, { nullable: true })
    min?: ArticleMinAggregate;

    @Field(() => ArticleMaxAggregate, { nullable: true })
    max?: ArticleMaxAggregate;
}
