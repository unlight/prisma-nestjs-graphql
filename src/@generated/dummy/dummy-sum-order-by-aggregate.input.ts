import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DummySumOrderByAggregateInput {
    @Field(() => SortOrder, { nullable: true })
    floaty?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    int?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    float?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    decimal?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    bigInt?: SortOrder;
}
