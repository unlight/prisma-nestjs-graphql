import { Field, InputType } from '@nestjs/graphql';

import { UserUpdateOneRequiredWithoutCommentsInput } from '../user/user-update-one-required-without-comments.input';

@InputType()
export class CommentUpdateWithoutArticleInput {
    @Field(() => String, {
        nullable: true,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
    })
    createdAt?: Date | string;

    @Field(() => String, {
        nullable: true,
    })
    updatedAt?: Date | string;

    @Field(() => String, {
        nullable: true,
    })
    body?: string;

    @Field(() => UserUpdateOneRequiredWithoutCommentsInput, {
        nullable: true,
    })
    author?: UserUpdateOneRequiredWithoutCommentsInput;
}
