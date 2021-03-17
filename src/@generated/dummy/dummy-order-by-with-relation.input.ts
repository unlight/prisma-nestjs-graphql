import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DummyOrderByWithRelationInput {
    @Field(() => SortOrder, { nullable: true })
    id?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    floaty?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    int?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    float?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    bytes?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    decimal?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    bigInt?: SortOrder;

    @Field(() => SortOrder, { nullable: true })
    json?: SortOrder;
}
