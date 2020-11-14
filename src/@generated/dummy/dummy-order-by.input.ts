import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DummyOrderByInput {
    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    id?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    bytes?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    decimal?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    bigInt?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    json?: SortOrder;
}
