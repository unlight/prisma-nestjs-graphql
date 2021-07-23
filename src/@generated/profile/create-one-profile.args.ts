import { ArgsType, Field } from '@nestjs/graphql';

import { ProfileCreateInput } from './profile-create.input';

@ArgsType()
export class CreateOneProfileArgs {
    @Field(() => ProfileCreateInput, { nullable: false })
    data!: ProfileCreateInput;
}
