import { Field, InputType } from '@nestjs/graphql';

import { ArticleUpdateWithoutTagsDataInput } from './article-update-without-tags-data.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType({})
export class ArticleUpdateWithWhereUniqueWithoutTagsInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: ArticleWhereUniqueInput | null;

    @Field(() => ArticleUpdateWithoutTagsDataInput, {
        nullable: true,
        description: undefined,
    })
    data?: ArticleUpdateWithoutTagsDataInput | null;
}
