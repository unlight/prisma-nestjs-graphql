import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutProfileInput } from './user-create-without-profile.input';
import { UserUpdateWithoutProfileInput } from './user-update-without-profile.input';

@InputType()
export class UserUpsertWithoutProfileInput {
    @Field(() => UserUpdateWithoutProfileInput, { nullable: false })
    update!: UserUpdateWithoutProfileInput;

    @Field(() => UserCreateWithoutProfileInput, { nullable: false })
    create!: UserCreateWithoutProfileInput;
}
