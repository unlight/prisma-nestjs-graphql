import { ArgsType, Field } from '@nestjs/graphql';

import { UserCreateInput } from './user-create.input';
import { UserUpdateInput } from './user-update.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, { nullable: false })
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateInput, { nullable: false })
    create!: UserCreateInput;

    @Field(() => UserUpdateInput, { nullable: false })
    update!: UserUpdateInput;
}
