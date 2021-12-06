import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CommentMaxOrderByAggregateInput {
    @Field(() => SortOrder, { nullable: true })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    body?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    articleId?: keyof typeof SortOrder;
}
