import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateManyWithoutTagsInput } from '../article/article-create-many-without-tags.input';

@InputType()
export class TagCreateInput {
    @Field(() => String, {
        nullable: true,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
    })
    name?: string;

    @Field(() => ArticleCreateManyWithoutTagsInput, {
        nullable: true,
    })
    articles?: ArticleCreateManyWithoutTagsInput;
}
