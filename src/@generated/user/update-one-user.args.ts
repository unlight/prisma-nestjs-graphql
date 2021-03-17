import { ArgsType, Field } from '@nestjs/graphql';

import { UserUpdateInput } from './user-update.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, { nullable: false })
    data!: UserUpdateInput;

    @Field(() => UserWhereUniqueInput, { nullable: false })
    where!: UserWhereUniqueInput;
}
