import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateManyAuthorInput } from './article-create-many-author.input';

@InputType()
export class ArticleCreateManyAuthorInputEnvelope {
    @Field(() => [ArticleCreateManyAuthorInput], { nullable: false })
    data!: Array<ArticleCreateManyAuthorInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
