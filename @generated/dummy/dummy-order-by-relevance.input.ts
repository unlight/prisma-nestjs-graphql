import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DummyOrderByRelevanceFieldEnum } from './dummy-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DummyOrderByRelevanceInput {

    @Field(() => [DummyOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${DummyOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
