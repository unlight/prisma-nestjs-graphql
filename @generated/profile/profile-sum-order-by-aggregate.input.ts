import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ProfileSumOrderByAggregateInput {

    @Field(() => SortOrder, {deprecationReason:'Use new name instead',nullable:true})
    id?: `${SortOrder}`;
}
