import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleCreateOrConnectWithoutauthorInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
    })
    where?: ArticleWhereUniqueInput;

    @Field(() => ArticleCreateWithoutAuthorInput, {
        nullable: true,
    })
    create?: ArticleCreateWithoutAuthorInput;
}
