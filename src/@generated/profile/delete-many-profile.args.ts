import { ArgsType, Field } from '@nestjs/graphql';

import { ProfileWhereInput } from './profile-where.input';

@ArgsType()
export class DeleteManyProfileArgs {
    @Field(() => ProfileWhereInput, { nullable: true })
    where?: ProfileWhereInput;
}
