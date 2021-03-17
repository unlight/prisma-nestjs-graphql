import { Field, InputType } from '@nestjs/graphql';

import { ArticleWhereInput } from './article-where.input';

@InputType()
export class ArticleListRelationFilter {
    @Field(() => ArticleWhereInput, { nullable: true })
    every?: ArticleWhereInput;

    @Field(() => ArticleWhereInput, { nullable: true })
    some?: ArticleWhereInput;

    @Field(() => ArticleWhereInput, { nullable: true })
    none?: ArticleWhereInput;
}
