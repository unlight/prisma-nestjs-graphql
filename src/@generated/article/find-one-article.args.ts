import { ArgsType, Field } from '@nestjs/graphql';

import { ArticleWhereUniqueInput } from './article-where-unique.input';

@ArgsType()
export class FindOneArticleArgs {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
    })
    where?: ArticleWhereUniqueInput;
}
