import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProfileUpdateManyMutationInput } from './profile-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProfileWhereInput } from './profile-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyProfileArgs {

    @Field(() => ProfileUpdateManyMutationInput, {nullable:false})
    @Type(() => ProfileUpdateManyMutationInput)
    data!: ProfileUpdateManyMutationInput;

    @Field(() => ProfileWhereInput, {nullable:true})
    @Type(() => ProfileWhereInput)
    where?: ProfileWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
