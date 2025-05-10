import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from './sort-order.enum';
import { NullsOrder } from './nulls-order.enum';

@InputType()
export class SortOrderInput {

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => NullsOrder, {nullable:true})
    nulls?: `${NullsOrder}`;
}
