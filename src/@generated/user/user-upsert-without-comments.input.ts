import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input';
import { UserUpdateWithoutCommentsInput } from './user-update-without-comments.input';

@InputType()
export class UserUpsertWithoutCommentsInput {
    @Field(() => UserUpdateWithoutCommentsInput, { nullable: false })
    update!: UserUpdateWithoutCommentsInput;

    @Field(() => UserCreateWithoutCommentsInput, { nullable: false })
    create!: UserCreateWithoutCommentsInput;
}
