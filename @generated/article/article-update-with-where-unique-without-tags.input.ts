import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithoutTagsInput } from './article-update-without-tags.input';

@InputType()
export class ArticleUpdateWithWhereUniqueWithoutTagsInput {
    @Field(() => ArticleWhereUniqueInput, { nullable: false })
    where!: ArticleWhereUniqueInput;

    @Field(() => ArticleUpdateWithoutTagsInput, { nullable: false })
    data!: ArticleUpdateWithoutTagsInput;
}
