import { Field, InputType } from '@nestjs/graphql';

import { ArticleWhereInput } from './article-where.input';

@InputType({})
export class ArticleFilter {
    @Field(() => ArticleWhereInput, {
        nullable: true,
        description: undefined,
    })
    every?: ArticleWhereInput | ArticleWhereInput[] | null;

    @Field(() => ArticleWhereInput, {
        nullable: true,
        description: undefined,
    })
    some?: ArticleWhereInput | ArticleWhereInput[] | null;

    @Field(() => ArticleWhereInput, {
        nullable: true,
        description: undefined,
    })
    none?: ArticleWhereInput | ArticleWhereInput[] | null;
}
