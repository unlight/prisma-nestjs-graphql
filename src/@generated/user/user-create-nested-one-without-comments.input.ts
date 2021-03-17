import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutCommentsInput } from './user-create-or-connect-without-comments.input';
import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCommentsInput {
    @Field(() => UserCreateWithoutCommentsInput, { nullable: true })
    create?: UserCreateWithoutCommentsInput;

    @Field(() => UserCreateOrConnectWithoutCommentsInput, { nullable: true })
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput;

    @Field(() => UserWhereUniqueInput, { nullable: true })
    connect?: UserWhereUniqueInput;
}
