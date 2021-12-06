import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleCreateWithoutTagsInput } from './article-create-without-tags.input';

@InputType()
export class ArticleCreateOrConnectWithoutTagsInput {
    @Field(() => ArticleWhereUniqueInput, { nullable: false })
    where!: ArticleWhereUniqueInput;

    @Field(() => ArticleCreateWithoutTagsInput, { nullable: false })
    create!: ArticleCreateWithoutTagsInput;
}
