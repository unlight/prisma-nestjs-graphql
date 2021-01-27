import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateOrConnectWithoutcommentsInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: false,
    })
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCommentsInput, {
        nullable: false,
    })
    create!: UserCreateWithoutCommentsInput;
}
