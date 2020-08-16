import { Field, InputType } from '@nestjs/graphql';

import { ArticleFilter } from '../article/article-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType({})
export class TagWhereInput {
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

    @Field(() => [TagWhereInput], {
        nullable: true,
        description: undefined,
    })
    AND?: TagWhereInput[] | null;

    @Field(() => [TagWhereInput], {
        nullable: true,
        description: undefined,
    })
    OR?: TagWhereInput[] | null;

    @Field(() => [TagWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: TagWhereInput[] | null;
}
