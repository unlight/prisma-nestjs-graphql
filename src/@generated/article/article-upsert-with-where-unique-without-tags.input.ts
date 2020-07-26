import { InputType, Field } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithoutTagsDataInput } from './article-update-without-tags-data.input';
import { ArticleCreateWithoutTagsInput } from './article-create-without-tags.input';

@InputType({})
export class ArticleUpsertWithWhereUniqueWithoutTagsInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: ArticleWhereUniqueInput | null;

    @Field(() => ArticleUpdateWithoutTagsDataInput, {
        nullable: true,
        description: undefined,
    })
    update?: ArticleUpdateWithoutTagsDataInput | null;

    @Field(() => ArticleCreateWithoutTagsInput, {
        nullable: true,
        description: undefined,
    })
    create?: ArticleCreateWithoutTagsInput | null;
}
