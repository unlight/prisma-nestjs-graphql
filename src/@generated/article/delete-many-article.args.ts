import { ArgsType, Field } from '@nestjs/graphql';

import { ArticleWhereInput } from './article-where.input';

@ArgsType()
export class DeleteManyArticleArgs {
    @Field(() => ArticleWhereInput, { nullable: true })
    where?: ArticleWhereInput;
}
