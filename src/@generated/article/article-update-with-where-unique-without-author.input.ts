import { InputType, Field } from '@nestjs/graphql';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { ArticleUpdateWithoutAuthorDataInput } from './article-update-without-author-data.input';

@InputType({})
export class ArticleUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => ArticleWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: ArticleWhereUniqueInput | null;

    @Field(() => ArticleUpdateWithoutAuthorDataInput, {
        nullable: true,
        description: undefined,
    })
    data?: ArticleUpdateWithoutAuthorDataInput | null;
}
