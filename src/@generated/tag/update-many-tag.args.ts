import { ArgsType, Field } from '@nestjs/graphql';

import { TagUpdateManyMutationInput } from './tag-update-many-mutation.input';
import { TagWhereInput } from './tag-where.input';

@ArgsType()
export class UpdateManyTagArgs {
    @Field(() => TagUpdateManyMutationInput, { nullable: false })
    data!: TagUpdateManyMutationInput;

    @Field(() => TagWhereInput, { nullable: true })
    where?: TagWhereInput;
}
