import { Field, InputType } from '@nestjs/graphql';

import { ArticleUpdateManyWithoutTagsInput } from '../article/article-update-many-without-tags.input';

@InputType({})
export class TagUpdateInput {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    name?: string;

    @Field(() => ArticleUpdateManyWithoutTagsInput, {
        nullable: true,
        description: undefined,
    })
    articles?: ArticleUpdateManyWithoutTagsInput | null;
}
