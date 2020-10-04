import { ArgsType, Field, Int } from '@nestjs/graphql';

import { ArticleAvgAggregateInput } from './article-avg-aggregate.input';
import { ArticleDistinctFieldEnum } from './article-distinct-field.enum';
import { ArticleMaxAggregateInput } from './article-max-aggregate.input';
import { ArticleMinAggregateInput } from './article-min-aggregate.input';
import { ArticleOrderByInput } from './article-order-by.input';
import { ArticleSumAggregateInput } from './article-sum-aggregate.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleWhereInput } from './article-where.input';

@ArgsType()
export class AggregateArticleArgs {
    @Field(() => ArticleWhereInput, {
        nullable: true,
        description: undefined,
    })
    where?: ArticleWhereInput;

    @Field(() => [ArticleOrderByInput], {
        nullable: true,
        description: undefined,
    })
    orderBy?: Array<ArticleOrderByInput> | ArticleOrderByInput;

    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    cursor?: ArticleWhereUniqueInput;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    take?: number;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    skip?: number;

    @Field(() => [ArticleDistinctFieldEnum], {
        nullable: true,
        description: undefined,
    })
    distinct?: Array<ArticleDistinctFieldEnum>;

    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    count?: true;

    @Field(() => ArticleAvgAggregateInput, {
        nullable: true,
        description: undefined,
    })
    avg?: ArticleAvgAggregateInput;

    @Field(() => ArticleSumAggregateInput, {
        nullable: true,
        description: undefined,
    })
    sum?: ArticleSumAggregateInput;

    @Field(() => ArticleMinAggregateInput, {
        nullable: true,
        description: undefined,
    })
    min?: ArticleMinAggregateInput;

    @Field(() => ArticleMaxAggregateInput, {
        nullable: true,
        description: undefined,
    })
    max?: ArticleMaxAggregateInput;
}
