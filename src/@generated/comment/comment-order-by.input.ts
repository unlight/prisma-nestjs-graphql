import { InputType, Field } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType({})
export class CommentOrderByInput {
    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    id?: SortOrder | null;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    createdAt?: SortOrder | null;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    updatedAt?: SortOrder | null;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    body?: SortOrder | null;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    authorId?: SortOrder | null;

    @Field(() => SortOrder, {
        nullable: true,
        description: undefined,
    })
    articleId?: SortOrder | null;
}
