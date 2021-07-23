import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutProfileInput } from './user-create-without-profile.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateOrConnectWithoutProfileInput {
    @Field(() => UserWhereUniqueInput, { nullable: false })
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutProfileInput, { nullable: false })
    create!: UserCreateWithoutProfileInput;
}
