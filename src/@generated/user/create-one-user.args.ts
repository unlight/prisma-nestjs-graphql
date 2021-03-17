import { ArgsType, Field } from '@nestjs/graphql';

import { UserCreateInput } from './user-create.input';

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, { nullable: false })
    data!: UserCreateInput;
}
