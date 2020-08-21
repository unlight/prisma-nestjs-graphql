import { InputType, Field } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input';

@InputType({})
export class ArticleFilter {
    @Field(() => ArticleWhereInput, {
        nullable: true,
        description: undefined,
    })
    every?: ArticleWhereInput | null;

    @Field(() => ArticleWhereInput, {
        nullable: true,
        description: undefined,
    })
    some?: ArticleWhereInput | null;

    @Field(() => ArticleWhereInput, {
        nullable: true,
        description: undefined,
    })
    none?: ArticleWhereInput | null;
}
