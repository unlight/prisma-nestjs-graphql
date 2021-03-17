import { ArgsType, Field } from '@nestjs/graphql';

import { CommentCreateManyInput } from './comment-create-many.input';

@ArgsType()
export class CreateManyCommentArgs {
    @Field(() => [CommentCreateManyInput], { nullable: false })
    data!: Array<CommentCreateManyInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
