import { ArgsType, Field } from '@nestjs/graphql';

import { ArticleUpdateInput } from './article-update.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@ArgsType()
export class UpdateOneArticleArgs {
    @Field(() => ArticleUpdateInput, { nullable: false })
    data!: ArticleUpdateInput;

    @Field(() => ArticleWhereUniqueInput, { nullable: false })
    where!: ArticleWhereUniqueInput;
}
