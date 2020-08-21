import { InputType, Field } from '@nestjs/graphql';
import { UserCreateOneWithoutCommentsInput } from '../user/user-create-one-without-comments.input';

@InputType({})
export class CommentCreateWithoutArticleInput {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    id?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    createdAt?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    updatedAt?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    body?: string | null;

    @Field(() => UserCreateOneWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    author?: UserCreateOneWithoutCommentsInput | null;
}
