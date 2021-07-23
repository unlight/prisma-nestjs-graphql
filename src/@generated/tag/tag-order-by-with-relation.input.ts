import { Field, InputType } from '@nestjs/graphql';

import { ArticleOrderByRelationAggregateInput } from '../article/article-order-by-relation-aggregate.input';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TagOrderByWithRelationInput {
    @Field(() => SortOrder, { nullable: true })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    name?: keyof typeof SortOrder;

    @Field(() => ArticleOrderByRelationAggregateInput, { nullable: true })
    articles?: ArticleOrderByRelationAggregateInput;
}
