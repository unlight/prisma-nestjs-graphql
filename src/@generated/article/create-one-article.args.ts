import { ArgsType, Field } from '@nestjs/graphql';

import { ArticleCreateInput } from './article-create.input';

@ArgsType()
export class CreateOneArticleArgs {
    @Field(() => ArticleCreateInput, { nullable: false })
    data!: ArticleCreateInput;
}
