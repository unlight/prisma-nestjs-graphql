import { ArgsType, Field, Int } from '@nestjs/graphql';

import { ArticleAvgAggregateInput } from './article-avg-aggregate.input';
import { ArticleMaxAggregateInput } from './article-max-aggregate.input';
import { ArticleMinAggregateInput } from './article-min-aggregate.input';
import { ArticleOrderByInput } from './article-order-by.input';
import { ArticleSumAggregateInput } from './article-sum-aggregate.input';
import { ArticleWhereInput } from './article-where.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@ArgsType()
export class AggregateArticleArgs {
    @Field(() => ArticleWhereInput, {
        nullable: true,
    })
    where?: ArticleWhereInput;

    @Field(() => [ArticleOrderByInput], {
        nullable: true,
    })
    orderBy?: Array<ArticleOrderByInput>;

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

    @Field(() => Boolean, {
        nullable: true,
    })
    count?: true;

    @Field(() => ArticleAvgAggregateInput, {
        nullable: true,
    })
    avg?: ArticleAvgAggregateInput;

    @Field(() => ArticleSumAggregateInput, {
        nullable: true,
    })
    sum?: ArticleSumAggregateInput;

    @Field(() => ArticleMinAggregateInput, {
        nullable: true,
    })
    min?: ArticleMinAggregateInput;

    @Field(() => ArticleMaxAggregateInput, {
        nullable: true,
    })
    max?: ArticleMaxAggregateInput;
}
