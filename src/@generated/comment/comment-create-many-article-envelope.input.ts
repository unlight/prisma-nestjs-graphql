import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateManyArticleInput } from './comment-create-many-article.input';

@InputType()
export class CommentCreateManyArticleEnvelopeInput {
    @Field(() => [CommentCreateManyArticleInput], {
        nullable: false,
    })
    data!: Array<CommentCreateManyArticleInput>;

    @Field(() => Boolean, {
        nullable: true,
    })
    skipDuplicates?: boolean;
}
