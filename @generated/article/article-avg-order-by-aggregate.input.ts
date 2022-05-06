import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ArticleAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  favoritesCount?: keyof typeof SortOrder;
}
