import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ArticleOrderByRelationAggregateInput } from '../article/article-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { TagOrderByRelevanceInput } from './tag-order-by-relevance.input';

@InputType()
export class TagOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => ArticleOrderByRelationAggregateInput, {nullable:true})
    @Type(() => ArticleOrderByRelationAggregateInput)
    articles?: ArticleOrderByRelationAggregateInput;

    @Field(() => TagOrderByRelevanceInput, {nullable:true})
    _relevance?: TagOrderByRelevanceInput;
}
