import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutCommentsInput } from './user-create-or-connect-without-comments.input';
import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input';
import { UserUpdateWithoutCommentsInput } from './user-update-without-comments.input';
import { UserUpsertWithoutCommentsInput } from './user-upsert-without-comments.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpdateOneRequiredWithoutCommentsInput {
    @Field(() => UserCreateWithoutCommentsInput, { nullable: true })
    create?: UserCreateWithoutCommentsInput;

    @Field(() => UserCreateOrConnectWithoutCommentsInput, { nullable: true })
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput;

    @Field(() => UserUpsertWithoutCommentsInput, { nullable: true })
    upsert?: UserUpsertWithoutCommentsInput;

    @Field(() => UserWhereUniqueInput, { nullable: true })
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCommentsInput, { nullable: true })
    update?: UserUpdateWithoutCommentsInput;
}
