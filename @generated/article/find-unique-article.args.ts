import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@ArgsType()
export class FindUniqueArticleArgs {
    @Field(() => ArticleWhereUniqueInput, { nullable: false })
    where!: ArticleWhereUniqueInput;
}
