import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input';
import { UserUpdateWithoutCommentsDataInput } from './user-update-without-comments-data.input';
import { UserUpsertWithoutCommentsInput } from './user-upsert-without-comments.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType({})
export class UserUpdateOneRequiredWithoutCommentsInput {
    @Field(() => UserCreateWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutCommentsInput | null;

    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    connect?: UserWhereUniqueInput | null;

    @Field(() => UserUpdateWithoutCommentsDataInput, {
        nullable: true,
        description: undefined,
    })
    update?: UserUpdateWithoutCommentsDataInput | null;

    @Field(() => UserUpsertWithoutCommentsInput, {
        nullable: true,
        description: undefined,
    })
    upsert?: UserUpsertWithoutCommentsInput | null;
}
