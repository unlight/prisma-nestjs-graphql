import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProfileUpdateInput } from './profile-update.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@ArgsType()
export class UpdateOneProfileArgs {
    @Field(() => ProfileUpdateInput, { nullable: false })
    data!: ProfileUpdateInput;

    @Field(() => ProfileWhereUniqueInput, { nullable: false })
    where!: ProfileWhereUniqueInput;
}
