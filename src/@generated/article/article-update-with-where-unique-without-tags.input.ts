import { Field, InputType } from '@nestjs/graphql';

import { ArticleUpdateWithoutTagsInput } from './article-update-without-tags.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleUpdateWithWhereUniqueWithoutTagsInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: ArticleWhereUniqueInput;

    @Field(() => ArticleUpdateWithoutTagsInput, {
        nullable: true,
        description: undefined,
    })
    data?: ArticleUpdateWithoutTagsInput;
}
