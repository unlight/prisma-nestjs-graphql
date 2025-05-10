import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ArticleSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    favoritesCount?: `${SortOrder}`;
}
