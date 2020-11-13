import { Field, InputType } from '@nestjs/graphql';

import { ArticleUpdateWithoutAuthorInput } from './article-update-without-author.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: ArticleWhereUniqueInput;

    @Field(() => ArticleUpdateWithoutAuthorInput, {
        nullable: true,
        description: undefined,
    })
    data?: ArticleUpdateWithoutAuthorInput;
}
