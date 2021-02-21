import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateManyAuthorEnvelopeInput } from './article-create-many-author-envelope.input';
import { ArticleCreateOrConnectWithoutAuthorInput } from './article-create-or-connect-without-author.input';
import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleCreateManyWithoutAuthorInput {
    @Field(() => [ArticleCreateWithoutAuthorInput], {
        nullable: true,
    })
    create?: Array<ArticleCreateWithoutAuthorInput>;

    @Field(() => [ArticleCreateOrConnectWithoutAuthorInput], {
        nullable: true,
    })
    connectOrCreate?: Array<ArticleCreateOrConnectWithoutAuthorInput>;

    @Field(() => ArticleCreateManyAuthorEnvelopeInput, {
        nullable: true,
    })
    createMany?: ArticleCreateManyAuthorEnvelopeInput;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
    })
    connect?: Array<ArticleWhereUniqueInput>;
}
