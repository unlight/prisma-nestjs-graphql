import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateOrConnectWithoutauthorInput } from './article-create-or-connect-withoutauthor.input';
import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleCreateManyWithoutAuthorInput {
    @Field(() => [ArticleCreateWithoutAuthorInput], {
        nullable: true,
    })
    create?:
        | ArticleCreateWithoutAuthorInput
        | Array<ArticleCreateWithoutAuthorInput>;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
    })
    connect?: ArticleWhereUniqueInput | Array<ArticleWhereUniqueInput>;

    @Field(() => [ArticleCreateOrConnectWithoutauthorInput], {
        nullable: true,
    })
    connectOrCreate?:
        | ArticleCreateOrConnectWithoutauthorInput
        | Array<ArticleCreateOrConnectWithoutauthorInput>;
}
