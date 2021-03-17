import { ArgsType, Field } from '@nestjs/graphql';

import { TagUpdateInput } from './tag-update.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@ArgsType()
export class UpdateOneTagArgs {
    @Field(() => TagUpdateInput, { nullable: false })
    data!: TagUpdateInput;

    @Field(() => TagWhereUniqueInput, { nullable: false })
    where!: TagWhereUniqueInput;
}
