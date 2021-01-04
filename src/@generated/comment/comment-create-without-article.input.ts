import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOneWithoutCommentsInput } from '../user/user-create-one-without-comments.input';

@InputType()
export class CommentCreateWithoutArticleInput {
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
        nullable: false,
    })
    body!: string;

    @Field(() => UserCreateOneWithoutCommentsInput, {
        nullable: false,
    })
    author!: UserCreateOneWithoutCommentsInput;
}
