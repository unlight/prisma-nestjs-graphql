import { Field, InputType } from '@nestjs/graphql';

import { ArticleUpdateManyWithoutTagsInput } from '../article/article-update-many-without-tags.input';

@InputType()
export class TagUpdateInput {
    @Field(() => String, {
        nullable: true,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
    })
    name?: string;

    @Field(() => ArticleUpdateManyWithoutTagsInput, {
        nullable: true,
    })
    articles?: ArticleUpdateManyWithoutTagsInput;
}
