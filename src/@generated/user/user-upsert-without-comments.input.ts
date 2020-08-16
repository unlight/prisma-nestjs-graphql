import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input';
import { UserUpdateWithoutCommentsDataInput } from './user-update-without-comments-data.input';

@InputType({})
export class UserUpsertWithoutCommentsInput {
    @Field(() => UserUpdateWithoutCommentsDataInput, {
        nullable: true,
        description: undefined,
    })
    update?: UserUpdateWithoutCommentsDataInput | null;

    @Field(() => UserCreateWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutCommentsInput | null;
}
