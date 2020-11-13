import { Field, InputType } from '@nestjs/graphql';

import { UserUpdateOneRequiredWithoutCommentsInput } from '../user/user-update-one-required-without-comments.input';

@InputType()
export class CommentUpdateWithoutArticleInput {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    createdAt?: Date | string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    updatedAt?: Date | string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    body?: string;

    @Field(() => UserUpdateOneRequiredWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    author?: UserUpdateOneRequiredWithoutCommentsInput;
}
