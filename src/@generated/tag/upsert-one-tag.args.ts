import { ArgsType, Field } from '@nestjs/graphql';

import { TagCreateInput } from './tag-create.input';
import { TagUpdateInput } from './tag-update.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@ArgsType()
export class UpsertOneTagArgs {
    @Field(() => TagWhereUniqueInput, { nullable: false })
    where!: TagWhereUniqueInput;

    @Field(() => TagCreateInput, { nullable: false })
    create!: TagCreateInput;

    @Field(() => TagUpdateInput, { nullable: false })
    update!: TagUpdateInput;
}
