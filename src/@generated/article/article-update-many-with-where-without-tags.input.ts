import { Field, InputType } from '@nestjs/graphql';

import { ArticleScalarWhereInput } from './article-scalar-where.input';
import { ArticleUncheckedUpdateManyWithoutArticlesInput } from './article-unchecked-update-many-without-articles.input';
import { ArticleUpdateManyMutationInput } from './article-update-many-mutation.input';

@InputType()
export class ArticleUpdateManyWithWhereWithoutTagsInput {
    @Field(() => ArticleScalarWhereInput, {
        nullable: false,
    })
    where!: ArticleScalarWhereInput;

    @Field(() => ArticleUpdateManyMutationInput, {
        nullable: false,
    })
    data!:
        | ArticleUpdateManyMutationInput
        | ArticleUncheckedUpdateManyWithoutArticlesInput;
}
