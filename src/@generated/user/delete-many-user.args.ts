import { ArgsType, Field } from '@nestjs/graphql';

import { UserWhereInput } from './user-where.input';

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, { nullable: true })
    where?: UserWhereInput;
}
