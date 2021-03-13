import { ArgsType, Field } from '@nestjs/graphql';

import { UserCreateManyInput } from './user-create-many.input';

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], { nullable: false })
    data!: Array<UserCreateManyInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
