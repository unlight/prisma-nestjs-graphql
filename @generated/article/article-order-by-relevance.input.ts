import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleOrderByRelevanceFieldEnum } from './article-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ArticleOrderByRelevanceInput {

    @Field(() => [ArticleOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${ArticleOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
