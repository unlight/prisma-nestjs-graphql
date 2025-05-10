import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserUpdateManyMutationInput } from './user-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserWhereInput } from './user-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyUserArgs {

    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    data!: UserUpdateManyMutationInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
