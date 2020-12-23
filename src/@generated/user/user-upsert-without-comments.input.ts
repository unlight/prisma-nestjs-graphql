import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input';
import { UserUpdateWithoutCommentsInput } from './user-update-without-comments.input';

@InputType()
export class UserUpsertWithoutCommentsInput {
    @Field(() => UserUpdateWithoutCommentsInput, {
        nullable: true,
    })
    update?: UserUpdateWithoutCommentsInput;

    @Field(() => UserCreateWithoutCommentsInput, {
        nullable: true,
    })
    create?: UserCreateWithoutCommentsInput;
}
