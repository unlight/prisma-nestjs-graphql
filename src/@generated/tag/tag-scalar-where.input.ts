import { InputType, Field } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ArticleFilter } from '../article/article-filter.input';

@InputType({})
export class TagScalarWhereInput {
    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    id?: string | StringFilter | null;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    name?: string | StringFilter | null;

    @Field(() => ArticleFilter, {
        nullable: true,
        description: undefined,
    })
    articles?: ArticleFilter | null;

    @Field(() => [TagScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    AND?: TagScalarWhereInput[] | null;

    @Field(() => [TagScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    OR?: TagScalarWhereInput[] | null;

    @Field(() => [TagScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: TagScalarWhereInput[] | null;
}
