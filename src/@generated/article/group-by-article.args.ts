import { ArgsType, Field, Int } from '@nestjs/graphql';

import { ArticleAvgAggregateInput } from './article-avg-aggregate.input';
import { ArticleCountAggregateInput } from './article-count-aggregate.input';
import { ArticleMaxAggregateInput } from './article-max-aggregate.input';
import { ArticleMinAggregateInput } from './article-min-aggregate.input';
import { ArticleOrderByInput } from './article-order-by.input';
import { ArticleScalarFieldEnum } from './article-scalar-field.enum';
import { ArticleScalarWhereWithAggregatesInput } from './article-scalar-where-with-aggregates.input';
import { ArticleSumAggregateInput } from './article-sum-aggregate.input';
import { ArticleWhereInput } from './article-where.input';

@ArgsType()
export class GroupByArticleArgs {
    @Field(() => ArticleWhereInput, { nullable: true })
    where?: ArticleWhereInput;

    @Field(() => [ArticleOrderByInput], { nullable: true })
    orderBy?: Array<ArticleOrderByInput>;

    @Field(() => [ArticleScalarFieldEnum], { nullable: false })
    by!: Array<ArticleScalarFieldEnum>;

    @Field(() => ArticleScalarWhereWithAggregatesInput, { nullable: true })
    having?: ArticleScalarWhereWithAggregatesInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => ArticleCountAggregateInput, { nullable: true })
    count?: ArticleCountAggregateInput;

    @Field(() => ArticleAvgAggregateInput, { nullable: true })
    avg?: ArticleAvgAggregateInput;

    @Field(() => ArticleSumAggregateInput, { nullable: true })
    sum?: ArticleSumAggregateInput;

    @Field(() => ArticleMinAggregateInput, { nullable: true })
    min?: ArticleMinAggregateInput;

    @Field(() => ArticleMaxAggregateInput, { nullable: true })
    max?: ArticleMaxAggregateInput;
}
