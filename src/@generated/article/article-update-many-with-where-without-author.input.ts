import { Field, InputType } from '@nestjs/graphql';

import { ArticleScalarWhereInput } from './article-scalar-where.input';
import { ArticleUpdateManyMutationInput } from './article-update-many-mutation.input';

@InputType()
export class ArticleUpdateManyWithWhereWithoutAuthorInput {
    @Field(() => ArticleScalarWhereInput, {
        nullable: true,
    })
    where?: ArticleScalarWhereInput;

    @Field(() => ArticleUpdateManyMutationInput, {
        nullable: true,
    })
    data?: ArticleUpdateManyMutationInput;
}
