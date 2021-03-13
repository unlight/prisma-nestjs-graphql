import { Field, InputType } from '@nestjs/graphql';

import { ArticleScalarWhereInput } from './article-scalar-where.input';
import { ArticleUpdateManyMutationInput } from './article-update-many-mutation.input';

@InputType()
export class ArticleUpdateManyWithWhereWithoutFavoritedByInput {
    @Field(() => ArticleScalarWhereInput, { nullable: false })
    where!: ArticleScalarWhereInput;

    @Field(() => ArticleUpdateManyMutationInput, { nullable: false })
    data!: ArticleUpdateManyMutationInput;
}
