import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateManyWithoutTagsInput } from '../article/article-create-many-without-tags.input';

@InputType()
export class TagCreateInput {
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

    @Field(() => ArticleCreateManyWithoutTagsInput, {
        nullable: true,
        description: undefined,
    })
    articles?: ArticleCreateManyWithoutTagsInput | null;
}
