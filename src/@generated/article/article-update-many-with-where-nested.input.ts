import { Field, InputType } from '@nestjs/graphql';

import { ArticleScalarWhereInput } from './article-scalar-where.input';
import { ArticleUpdateManyDataInput } from './article-update-many-data.input';

@InputType()
export class ArticleUpdateManyWithWhereNestedInput {
    @Field(() => ArticleScalarWhereInput, {
        nullable: true,
        description: undefined,
    })
    where?: ArticleScalarWhereInput;

    @Field(() => ArticleUpdateManyDataInput, {
        nullable: true,
        description: undefined,
    })
    data?: ArticleUpdateManyDataInput;
}
