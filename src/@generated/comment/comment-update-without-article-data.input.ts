import { InputType, Field } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutCommentsInput } from '../user/user-update-one-required-without-comments.input';

@InputType({})
export class CommentUpdateWithoutArticleDataInput {
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

    @Field(() => UserUpdateOneRequiredWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    author?: UserUpdateOneRequiredWithoutCommentsInput | null;
}
