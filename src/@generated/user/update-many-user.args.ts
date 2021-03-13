import { ArgsType, Field } from '@nestjs/graphql';

import { UserUpdateManyMutationInput } from './user-update-many-mutation.input';
import { UserWhereInput } from './user-where.input';

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, { nullable: false })
    data!: UserUpdateManyMutationInput;

    @Field(() => UserWhereInput, { nullable: true })
    where?: UserWhereInput;
}
