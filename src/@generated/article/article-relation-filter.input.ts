import { InputType, Field } from '@nestjs/graphql';
import { ArticleWhereInput } from './article-where.input';

@InputType({})
export class ArticleRelationFilter {
    @Field(() => ArticleWhereInput, {
        nullable: true,
        description: undefined,
    })
    is?: ArticleWhereInput | null;

    @Field(() => ArticleWhereInput, {
        nullable: true,
        description: undefined,
    })
    isNot?: ArticleWhereInput | null;
}
