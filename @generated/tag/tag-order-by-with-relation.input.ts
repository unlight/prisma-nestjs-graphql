import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum.ts';
import { ArticleOrderByRelationAggregateInput } from '../article/article-order-by-relation-aggregate.input.ts';
import { Type } from 'class-transformer';

@InputType()
export class TagOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  name?: `${SortOrder}`;

  @Field(() => ArticleOrderByRelationAggregateInput, { nullable: true })
  @Type(() => ArticleOrderByRelationAggregateInput)
  articles?: ArticleOrderByRelationAggregateInput;
}
