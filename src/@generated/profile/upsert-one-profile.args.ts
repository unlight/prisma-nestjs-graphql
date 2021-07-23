import { ArgsType, Field } from '@nestjs/graphql';

import { ProfileCreateInput } from './profile-create.input';
import { ProfileUpdateInput } from './profile-update.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@ArgsType()
export class UpsertOneProfileArgs {
    @Field(() => ProfileWhereUniqueInput, { nullable: false })
    where!: ProfileWhereUniqueInput;

    @Field(() => ProfileCreateInput, { nullable: false })
    create!: ProfileCreateInput;

    @Field(() => ProfileUpdateInput, { nullable: false })
    update!: ProfileUpdateInput;
}
