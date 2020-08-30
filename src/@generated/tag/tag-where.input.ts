import { Field, InputType } from '@nestjs/graphql';

import { ArticleListRelationFilter } from '../article/article-list-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType({})
export class TagWhereInput {
    @Field(() => [TagWhereInput], {
        nullable: true,
        description: undefined,
    })
    AND?: TagWhereInput | Array<TagWhereInput>;

    @Field(() => [TagWhereInput], {
        nullable: true,
        description: undefined,
    })
    OR?: Array<TagWhereInput>;

    @Field(() => [TagWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: TagWhereInput | Array<TagWhereInput>;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    id?: string | StringFilter;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    name?: string | StringFilter;

    @Field(() => ArticleListRelationFilter, {
        nullable: true,
        description: undefined,
    })
    articles?: ArticleListRelationFilter | null;
}
