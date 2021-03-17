import { ArgsType, Field } from '@nestjs/graphql';

import { ArticleCreateInput } from './article-create.input';
import { ArticleUpdateInput } from './article-update.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@ArgsType()
export class UpsertOneArticleArgs {
    @Field(() => ArticleWhereUniqueInput, { nullable: false })
    where!: ArticleWhereUniqueInput;

    @Field(() => ArticleCreateInput, { nullable: false })
    create!: ArticleCreateInput;

    @Field(() => ArticleUpdateInput, { nullable: false })
    update!: ArticleUpdateInput;
}
