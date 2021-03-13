import { ArgsType, Field } from '@nestjs/graphql';

import { UserWhereUniqueInput } from './user-where-unique.input';

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, { nullable: false })
    where!: UserWhereUniqueInput;
}
