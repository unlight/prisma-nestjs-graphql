import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateOrConnectWithouttagsInput } from './article-create-or-connect-withouttags.input';
import { ArticleCreateWithoutTagsInput } from './article-create-without-tags.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleCreateManyWithoutTagsInput {
    @Field(() => [ArticleCreateWithoutTagsInput], {
        nullable: true,
    })
    create?: Array<ArticleCreateWithoutTagsInput>;

    @Field(() => [ArticleCreateOrConnectWithouttagsInput], {
        nullable: true,
    })
    connectOrCreate?: Array<ArticleCreateOrConnectWithouttagsInput>;

    @Field(() => [ArticleWhereUniqueInput], {
        nullable: true,
    })
    connect?: Array<ArticleWhereUniqueInput>;
}
