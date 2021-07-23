import { ArgsType, Field, Int } from '@nestjs/graphql';

import { ArticleAvgAggregateInput } from './article-avg-aggregate.input';
import { ArticleCountAggregateInput } from './article-count-aggregate.input';
import { ArticleMaxAggregateInput } from './article-max-aggregate.input';
import { ArticleMinAggregateInput } from './article-min-aggregate.input';
import { ArticleOrderByWithAggregationInput } from './article-order-by-with-aggregation.input';
import { ArticleScalarFieldEnum } from './article-scalar-field.enum';
import { ArticleScalarWhereWithAggregatesInput } from './article-scalar-where-with-aggregates.input';
import { ArticleSumAggregateInput } from './article-sum-aggregate.input';
import { ArticleWhereInput } from './article-where.input';

@ArgsType()
export class ArticleGroupByArgs {
    @Field(() => ArticleWhereInput, { nullable: true })
    where?: ArticleWhereInput;

    @Field(() => [ArticleOrderByWithAggregationInput], { nullable: true })
    orderBy?: Array<ArticleOrderByWithAggregationInput>;

    @Field(() => [ArticleScalarFieldEnum], { nullable: false })
    by!: Array<keyof typeof ArticleScalarFieldEnum>;

    @Field(() => ArticleScalarWhereWithAggregatesInput, { nullable: true })
    having?: ArticleScalarWhereWithAggregatesInput;

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
