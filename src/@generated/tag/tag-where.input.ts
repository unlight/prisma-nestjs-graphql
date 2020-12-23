import { Field, InputType } from '@nestjs/graphql';

import { ArticleListRelationFilter } from '../article/article-list-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class TagWhereInput {
    @Field(() => [TagWhereInput], {
        nullable: true,
    })
    AND?: TagWhereInput | Array<TagWhereInput>;

    @Field(() => [TagWhereInput], {
        nullable: true,
    })
    OR?: TagWhereInput | Array<TagWhereInput>;

    @Field(() => [TagWhereInput], {
        nullable: true,
    })
    NOT?: TagWhereInput | Array<TagWhereInput>;

    @Field(() => StringFilter, {
        nullable: true,
    })
    id?: StringFilter | string;

    @Field(() => StringFilter, {
        nullable: true,
    })
    name?: StringFilter | string;

    @Field(() => ArticleListRelationFilter, {
        nullable: true,
    })
    articles?: ArticleListRelationFilter;
}
