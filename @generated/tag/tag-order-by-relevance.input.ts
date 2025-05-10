import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagOrderByRelevanceFieldEnum } from './tag-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TagOrderByRelevanceInput {

    @Field(() => [TagOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${TagOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
