import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleOrderByRelevanceFieldEnum } from './article-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ArticleOrderByRelevanceInput {
    @Field(() => [ArticleOrderByRelevanceFieldEnum], { nullable: false })
    fields!: Array<keyof typeof ArticleOrderByRelevanceFieldEnum>;

    @Field(() => SortOrder, { nullable: false })
    sort!: keyof typeof SortOrder;

    @Field(() => String, { nullable: false })
    search!: string;
}
