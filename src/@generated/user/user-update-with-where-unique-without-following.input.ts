import { InputType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFollowingDataInput } from './user-update-without-following-data.input';

@InputType({})
export class UserUpdateWithWhereUniqueWithoutFollowingInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserWhereUniqueInput | null;

    @Field(() => UserUpdateWithoutFollowingDataInput, {
        nullable: true,
        description: undefined,
    })
    data?: UserUpdateWithoutFollowingDataInput | null;
}
