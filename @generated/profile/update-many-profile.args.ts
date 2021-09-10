import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProfileUpdateManyMutationInput } from './profile-update-many-mutation.input';
import { ProfileWhereInput } from './profile-where.input';

@ArgsType()
export class UpdateManyProfileArgs {
    @Field(() => ProfileUpdateManyMutationInput, { nullable: false })
    data!: ProfileUpdateManyMutationInput;

    @Field(() => ProfileWhereInput, { nullable: true })
    where?: ProfileWhereInput;
}
