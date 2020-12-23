import { Field, InputType } from '@nestjs/graphql';

import { UserScalarWhereInput } from './user-scalar-where.input';
import { UserUpdateManyMutationInput } from './user-update-many-mutation.input';

@InputType()
export class UserUpdateManyWithWhereWithoutFollowingInput {
    @Field(() => UserScalarWhereInput, {
        nullable: true,
    })
    where?: UserScalarWhereInput;

    @Field(() => UserUpdateManyMutationInput, {
        nullable: true,
    })
    data?: UserUpdateManyMutationInput;
}
