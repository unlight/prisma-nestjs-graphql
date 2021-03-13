import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateNestedManyWithoutTagsInput } from '../article/article-create-nested-many-without-tags.input';

@InputType()
export class TagCreateInput {
    @Field(() => String, { nullable: true })
    id?: string;

    @Field(() => String, { nullable: false })
    name!: string;

    @Field(() => ArticleCreateNestedManyWithoutTagsInput, { nullable: true })
    articles?: ArticleCreateNestedManyWithoutTagsInput;
}
