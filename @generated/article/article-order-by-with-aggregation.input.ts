import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ArticleCountOrderByAggregateInput } from './article-count-order-by-aggregate.input';
import { ArticleAvgOrderByAggregateInput } from './article-avg-order-by-aggregate.input';
import { ArticleMaxOrderByAggregateInput } from './article-max-order-by-aggregate.input';
import { ArticleMinOrderByAggregateInput } from './article-min-order-by-aggregate.input';
import { ArticleSumOrderByAggregateInput } from './article-sum-order-by-aggregate.input';

@InputType()
export class ArticleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    body?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    favoritesCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    active?: SortOrderInput;

    @Field(() => ArticleCountOrderByAggregateInput, {nullable:true})
    _count?: ArticleCountOrderByAggregateInput;

    @Field(() => ArticleAvgOrderByAggregateInput, {nullable:true})
    _avg?: ArticleAvgOrderByAggregateInput;

    @Field(() => ArticleMaxOrderByAggregateInput, {nullable:true})
    _max?: ArticleMaxOrderByAggregateInput;

    @Field(() => ArticleMinOrderByAggregateInput, {nullable:true})
    _min?: ArticleMinOrderByAggregateInput;

    @Field(() => ArticleSumOrderByAggregateInput, {nullable:true})
    _sum?: ArticleSumOrderByAggregateInput;
}
