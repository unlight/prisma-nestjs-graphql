import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateOrConnectWithoutAuthorInput {
    @Field(() => CommentWhereUniqueInput, { nullable: false })
    where!: CommentWhereUniqueInput;

    @Field(() => CommentCreateWithoutAuthorInput, { nullable: false })
    create!: CommentCreateWithoutAuthorInput;
}
