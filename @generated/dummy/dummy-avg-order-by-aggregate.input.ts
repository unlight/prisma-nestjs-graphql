import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DummyAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    int?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    float?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    decimal?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    decimals?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    bigInt?: `${SortOrder}`;
}
