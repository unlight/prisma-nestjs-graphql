import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ArticleOrderByRelationAggregateInput } from '../article/article-order-by-relation-aggregate.input';
import { Type } from 'class-transformer';
import { TagOrderByRelevanceInput } from './tag-order-by-relevance.input';

@InputType()
export class TagOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => ArticleOrderByRelationAggregateInput, { nullable: true })
  @Type(() => ArticleOrderByRelationAggregateInput)
  articles?: ArticleOrderByRelationAggregateInput;

  @Field(() => TagOrderByRelevanceInput, { nullable: true })
  _relevance?: TagOrderByRelevanceInput;
}
