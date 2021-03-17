import { Field, InputType } from '@nestjs/graphql';

import { CommentUpdateWithoutAuthorInput } from './comment-update-without-author.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => CommentWhereUniqueInput, { nullable: false })
    where!: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutAuthorInput, { nullable: false })
    data!: CommentUpdateWithoutAuthorInput;
}
