import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateManyArticleInput } from './comment-create-many-article.input';

@InputType()
export class CommentCreateManyArticleInputEnvelope {
    @Field(() => [CommentCreateManyArticleInput], { nullable: false })
    data!: Array<CommentCreateManyArticleInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
