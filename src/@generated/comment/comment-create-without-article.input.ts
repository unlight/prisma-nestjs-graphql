import { Field, InputType } from '@nestjs/graphql';

import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';

@InputType()
export class CommentCreateWithoutArticleInput {
    @Field(() => String, { nullable: true })
    id?: string;

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string;

    @Field(() => String, { nullable: false })
    body!: string;

    @Field(() => UserCreateNestedOneWithoutCommentsInput, { nullable: false })
    author!: UserCreateNestedOneWithoutCommentsInput;
}
