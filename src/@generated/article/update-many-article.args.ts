import { ArgsType, Field } from '@nestjs/graphql';

import { ArticleUpdateManyMutationInput } from './article-update-many-mutation.input';
import { ArticleWhereInput } from './article-where.input';

@ArgsType()
export class UpdateManyArticleArgs {
    @Field(() => ArticleUpdateManyMutationInput, { nullable: false })
    data!: ArticleUpdateManyMutationInput;

    @Field(() => ArticleWhereInput, { nullable: true })
    where?: ArticleWhereInput;
}
