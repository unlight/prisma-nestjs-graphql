import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateWithoutTagsInput } from './article-create-without-tags.input';
import { ArticleUncheckedCreateWithoutTagsInput } from './article-unchecked-create-without-tags.input';
import { ArticleUncheckedUpdateWithoutTagsInput } from './article-unchecked-update-without-tags.input';
import { ArticleUpdateWithoutTagsInput } from './article-update-without-tags.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleUpsertWithWhereUniqueWithoutTagsInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: false,
    })
    where!: ArticleWhereUniqueInput;

    @Field(() => ArticleUpdateWithoutTagsInput, {
        nullable: false,
    })
    update!: ArticleUpdateWithoutTagsInput | ArticleUncheckedUpdateWithoutTagsInput;

    @Field(() => ArticleCreateWithoutTagsInput, {
        nullable: false,
    })
    create!: ArticleCreateWithoutTagsInput | ArticleUncheckedCreateWithoutTagsInput;
}
