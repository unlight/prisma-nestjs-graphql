import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input';
import { UserUncheckedCreateWithoutCommentsInput } from './user-unchecked-create-without-comments.input';
import { UserUncheckedUpdateWithoutCommentsInput } from './user-unchecked-update-without-comments.input';
import { UserUpdateWithoutCommentsInput } from './user-update-without-comments.input';

@InputType()
export class UserUpsertWithoutCommentsInput {
    @Field(() => UserUpdateWithoutCommentsInput, {
        nullable: false,
    })
    update!: UserUpdateWithoutCommentsInput | UserUncheckedUpdateWithoutCommentsInput;

    @Field(() => UserCreateWithoutCommentsInput, {
        nullable: false,
    })
    create!: UserCreateWithoutCommentsInput | UserUncheckedCreateWithoutCommentsInput;
}
