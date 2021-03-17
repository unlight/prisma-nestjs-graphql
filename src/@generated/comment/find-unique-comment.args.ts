import { ArgsType, Field } from '@nestjs/graphql';

import { CommentWhereUniqueInput } from './comment-where-unique.input';

@ArgsType()
export class FindUniqueCommentArgs {
    @Field(() => CommentWhereUniqueInput, { nullable: false })
    where!: CommentWhereUniqueInput;
}
