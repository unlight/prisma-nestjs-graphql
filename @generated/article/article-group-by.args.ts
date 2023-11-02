import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input';
import { Type } from 'class-transformer';
import { ArticleOrderByWithAggregationInput } from './article-order-by-with-aggregation.input';
import { ArticleScalarFieldEnum } from './article-scalar-field.enum';
import { ArticleScalarWhereWithAggregatesInput } from './article-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ArticleCountAggregateInput } from './article-count-aggregate.input';
import { ArticleAvgAggregateInput } from './article-avg-aggregate.input';
import { ArticleSumAggregateInput } from './article-sum-aggregate.input';
import { ArticleMinAggregateInput } from './article-min-aggregate.input';
import { ArticleMaxAggregateInput } from './article-max-aggregate.input';

@ArgsType()
export class ArticleGroupByArgs {

    @Field(() => ArticleWhereInput, {nullable:true})
    @Type(() => ArticleWhereInput)
    where?: ArticleWhereInput;

    @Field(() => [ArticleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ArticleOrderByWithAggregationInput>;

    @Field(() => [ArticleScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ArticleScalarFieldEnum>;

    @Field(() => ArticleScalarWhereWithAggregatesInput, {nullable:true})
    having?: ArticleScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ArticleCountAggregateInput, {nullable:true})
    _count?: ArticleCountAggregateInput;

    @Field(() => ArticleAvgAggregateInput, {nullable:true})
    _avg?: ArticleAvgAggregateInput;

    @Field(() => ArticleSumAggregateInput, {nullable:true})
    _sum?: ArticleSumAggregateInput;

    @Field(() => ArticleMinAggregateInput, {nullable:true})
    _min?: ArticleMinAggregateInput;

    @Field(() => ArticleMaxAggregateInput, {nullable:true})
    _max?: ArticleMaxAggregateInput;
}
