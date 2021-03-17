import { Field, InputType } from '@nestjs/graphql';

import { ArticleOrderByAggregateInput } from '../article/article-order-by-aggregate.input';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TagOrderByWithRelationInput {
    @Field(() => SortOrder, { nullable: true })
    id?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    name?: SortOrder;

    @Field(() => ArticleOrderByAggregateInput, { nullable: true })
    articles?: ArticleOrderByAggregateInput;
}
