import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TagOrderByInput {
    @Field(() => SortOrder, {
        nullable: true,
    })
    id?: SortOrder;

    @Field(() => SortOrder, {
        nullable: true,
    })
    name?: SortOrder;
}
