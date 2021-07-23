import { ArgsType, Field, Int } from '@nestjs/graphql';

import { ArticleAvgAggregateInput } from './article-avg-aggregate.input';
import { ArticleCountAggregateInput } from './article-count-aggregate.input';
import { ArticleMaxAggregateInput } from './article-max-aggregate.input';
import { ArticleMinAggregateInput } from './article-min-aggregate.input';
import { ArticleOrderByWithRelationInput } from './article-order-by-with-relation.input';
import { ArticleSumAggregateInput } from './article-sum-aggregate.input';
import { ArticleWhereInput } from './article-where.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@ArgsType()
export class ArticleAggregateArgs {
    @Field(() => ArticleWhereInput, { nullable: true })
    where?: ArticleWhereInput;

    @Field(() => [ArticleOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<ArticleOrderByWithRelationInput>;

    @Field(() => ArticleWhereUniqueInput, { nullable: true })
    cursor?: ArticleWhereUniqueInput;

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
