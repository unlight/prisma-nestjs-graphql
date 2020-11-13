import { Field, InputType } from '@nestjs/graphql';

import { ArticleScalarWhereInput } from './article-scalar-where.input';
import { ArticleUpdateManyMutationInput } from './article-update-many-mutation.input';

@InputType()
export class ArticleUpdateManyWithWhereWithoutFavoritedByInput {
    @Field(() => ArticleScalarWhereInput, {
        nullable: true,
        description: undefined,
    })
    where?: ArticleScalarWhereInput;

    @Field(() => ArticleUpdateManyMutationInput, {
        nullable: true,
        description: undefined,
    })
    data?: ArticleUpdateManyMutationInput;
}
