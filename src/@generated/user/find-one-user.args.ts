import { ArgsType, Field } from '@nestjs/graphql';

import { UserWhereUniqueInput } from './user-where-unique.input';

@ArgsType()
export class FindOneUserArgs {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
    })
    where?: UserWhereUniqueInput;
}
