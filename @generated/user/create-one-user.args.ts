import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserCreateInput } from './user-create.input';

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, { nullable: false })
    data!: UserCreateInput;
}
