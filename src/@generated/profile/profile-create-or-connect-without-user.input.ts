import { Field, InputType } from '@nestjs/graphql';

import { ProfileCreateWithoutUserInput } from './profile-create-without-user.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@InputType()
export class ProfileCreateOrConnectWithoutUserInput {
    @Field(() => ProfileWhereUniqueInput, { nullable: false })
    where!: ProfileWhereUniqueInput;

    @Field(() => ProfileCreateWithoutUserInput, { nullable: false })
    create!: ProfileCreateWithoutUserInput;
}
