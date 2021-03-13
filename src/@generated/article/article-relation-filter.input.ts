import { Field, InputType } from '@nestjs/graphql';

import { ArticleWhereInput } from './article-where.input';

@InputType()
export class ArticleRelationFilter {
    @Field(() => ArticleWhereInput, { nullable: true })
    is?: ArticleWhereInput;

    @Field(() => ArticleWhereInput, { nullable: true })
    isNot?: ArticleWhereInput;
}
