import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithoutAuthorInput } from './article-update-without-author.input';

@InputType()
export class ArticleUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => ArticleWhereUniqueInput, { nullable: false })
    where!: ArticleWhereUniqueInput;

    @Field(() => ArticleUpdateWithoutAuthorInput, { nullable: false })
    data!: ArticleUpdateWithoutAuthorInput;
}
