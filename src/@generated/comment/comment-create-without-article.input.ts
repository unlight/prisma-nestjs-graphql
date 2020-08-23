import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOneWithoutCommentsInput } from '../user/user-create-one-without-comments.input';

@InputType({})
export class CommentCreateWithoutArticleInput {
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

    @Field(() => UserCreateOneWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    author?: UserCreateOneWithoutCommentsInput;
}
