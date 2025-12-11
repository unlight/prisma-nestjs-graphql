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
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    slug?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    body?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    favoritesCount?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    authorId?: `${SortOrder}`;

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
