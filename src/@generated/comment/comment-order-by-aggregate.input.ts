import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CommentOrderByAggregateInput {
    @Field(() => SortOrder, { nullable: false })
    count!: SortOrder;
}
