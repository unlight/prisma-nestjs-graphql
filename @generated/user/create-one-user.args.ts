import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserCreateInput } from './user-create.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, { nullable: false })
    @ValidateNested()
    @Type(() => UserCreateInput)
    data!: UserCreateInput;
}
