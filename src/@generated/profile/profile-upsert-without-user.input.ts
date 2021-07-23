import { Field, InputType } from '@nestjs/graphql';

import { ProfileCreateWithoutUserInput } from './profile-create-without-user.input';
import { ProfileUpdateWithoutUserInput } from './profile-update-without-user.input';

@InputType()
export class ProfileUpsertWithoutUserInput {
    @Field(() => ProfileUpdateWithoutUserInput, { nullable: false })
    update!: ProfileUpdateWithoutUserInput;

    @Field(() => ProfileCreateWithoutUserInput, { nullable: false })
    create!: ProfileCreateWithoutUserInput;
}
