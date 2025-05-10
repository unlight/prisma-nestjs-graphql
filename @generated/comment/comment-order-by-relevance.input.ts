import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentOrderByRelevanceFieldEnum } from './comment-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CommentOrderByRelevanceInput {

    @Field(() => [CommentOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${CommentOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
