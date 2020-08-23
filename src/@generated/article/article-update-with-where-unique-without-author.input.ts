import { Field, InputType } from '@nestjs/graphql';

import { ArticleUpdateWithoutAuthorDataInput } from './article-update-without-author-data.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType({})
export class ArticleUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: ArticleWhereUniqueInput;

    @Field(() => ArticleUpdateWithoutAuthorDataInput, {
        nullable: true,
        description: undefined,
    })
    data?: ArticleUpdateWithoutAuthorDataInput;
}
