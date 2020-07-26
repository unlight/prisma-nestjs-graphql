import { InputType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFollowersDataInput } from './user-update-without-followers-data.input';

@InputType({})
export class UserUpdateWithWhereUniqueWithoutFollowersInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserWhereUniqueInput | null;

    @Field(() => UserUpdateWithoutFollowersDataInput, {
        nullable: true,
        description: undefined,
    })
    data?: UserUpdateWithoutFollowersDataInput | null;
}
