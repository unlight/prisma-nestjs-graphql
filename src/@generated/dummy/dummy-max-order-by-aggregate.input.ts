import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DummyMaxOrderByAggregateInput {
    @Field(() => SortOrder, { nullable: true })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    created?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    floaty?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    int?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    float?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    bytes?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    decimal?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    bigInt?: keyof typeof SortOrder;
}
