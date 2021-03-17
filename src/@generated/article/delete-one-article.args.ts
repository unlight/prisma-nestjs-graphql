import { ArgsType, Field } from '@nestjs/graphql';

import { ArticleWhereUniqueInput } from './article-where-unique.input';

@ArgsType()
export class DeleteOneArticleArgs {
    @Field(() => ArticleWhereUniqueInput, { nullable: false })
    where!: ArticleWhereUniqueInput;
}
