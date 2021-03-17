import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input';
import { ArticleUpdateWithoutAuthorInput } from './article-update-without-author.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => ArticleWhereUniqueInput, { nullable: false })
    where!: ArticleWhereUniqueInput;

    @Field(() => ArticleUpdateWithoutAuthorInput, { nullable: false })
    update!: ArticleUpdateWithoutAuthorInput;

    @Field(() => ArticleCreateWithoutAuthorInput, { nullable: false })
    create!: ArticleCreateWithoutAuthorInput;
}
