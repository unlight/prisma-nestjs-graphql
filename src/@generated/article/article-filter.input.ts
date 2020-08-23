import { Field, InputType } from '@nestjs/graphql';

import { ArticleWhereInput } from './article-where.input';

@InputType({})
export class ArticleFilter {
    @Field(() => ArticleWhereInput, {
        nullable: true,
        description: undefined,
    })
    every?: ArticleWhereInput;

    @Field(() => ArticleWhereInput, {
        nullable: true,
        description: undefined,
    })
    some?: ArticleWhereInput;

    @Field(() => ArticleWhereInput, {
        nullable: true,
        description: undefined,
    })
    none?: ArticleWhereInput;
}
