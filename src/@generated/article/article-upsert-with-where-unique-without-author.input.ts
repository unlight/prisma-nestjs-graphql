import { InputType, Field } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithoutAuthorDataInput } from './article-update-without-author-data.input';
import { ArticleCreateWithoutAuthorInput } from './article-create-without-author.input';

@InputType({})
export class ArticleUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: ArticleWhereUniqueInput | null;

    @Field(() => ArticleUpdateWithoutAuthorDataInput, {
        nullable: true,
        description: undefined,
    })
    update?: ArticleUpdateWithoutAuthorDataInput | null;

    @Field(() => ArticleCreateWithoutAuthorInput, {
        nullable: true,
        description: undefined,
    })
    create?: ArticleCreateWithoutAuthorInput | null;
}
