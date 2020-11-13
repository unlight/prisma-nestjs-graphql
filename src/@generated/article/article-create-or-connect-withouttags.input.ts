import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateWithoutTagsInput } from './article-create-without-tags.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleCreateOrConnectWithouttagsInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: ArticleWhereUniqueInput;

    @Field(() => ArticleCreateWithoutTagsInput, {
        nullable: true,
        description: undefined,
    })
    create?: ArticleCreateWithoutTagsInput;
}
