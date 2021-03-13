import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateOrConnectWithoutTagsInput } from './article-create-or-connect-without-tags.input';
import { ArticleCreateWithoutTagsInput } from './article-create-without-tags.input';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleCreateNestedManyWithoutTagsInput {
    @Field(() => [ArticleCreateWithoutTagsInput], { nullable: true })
    create?: Array<ArticleCreateWithoutTagsInput>;

    @Field(() => [ArticleCreateOrConnectWithoutTagsInput], { nullable: true })
    connectOrCreate?: Array<ArticleCreateOrConnectWithoutTagsInput>;

    @Field(() => [ArticleWhereUniqueInput], { nullable: true })
    connect?: Array<ArticleWhereUniqueInput>;
}
