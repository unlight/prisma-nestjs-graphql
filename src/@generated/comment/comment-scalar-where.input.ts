import { InputType, Field } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { NullableStringFilter } from '../prisma/nullable-string-filter.input';

@InputType({})
export class CommentScalarWhereInput {
    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    id?: string | StringFilter | null;

    @Field(() => DateTimeFilter, {
        nullable: true,
        description: undefined,
    })
    createdAt?: DateTimeFilter | null;

    @Field(() => DateTimeFilter, {
        nullable: true,
        description: undefined,
    })
    updatedAt?: DateTimeFilter | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    body?: string | StringFilter | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    authorId?: string | StringFilter | null;

    @Field(() => NullableStringFilter, {
        nullable: true,
        description: undefined,
    })
    articleId?: string | NullableStringFilter | null;

    @Field(() => [CommentScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    AND?: CommentScalarWhereInput[] | null;

    @Field(() => [CommentScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    OR?: CommentScalarWhereInput[] | null;

    @Field(() => [CommentScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: CommentScalarWhereInput[] | null;
}
