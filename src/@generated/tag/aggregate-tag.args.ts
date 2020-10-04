import { ArgsType, Field, Int } from '@nestjs/graphql';

import { TagDistinctFieldEnum } from './tag-distinct-field.enum';
import { TagOrderByInput } from './tag-order-by.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagWhereInput } from './tag-where.input';

@ArgsType()
export class AggregateTagArgs {
    @Field(() => TagWhereInput, {
        nullable: true,
        description: undefined,
    })
    where?: TagWhereInput;

    @Field(() => [TagOrderByInput], {
        nullable: true,
        description: undefined,
    })
    orderBy?: Array<TagOrderByInput> | TagOrderByInput;

    @Field(() => TagWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    cursor?: TagWhereUniqueInput;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    take?: number;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    skip?: number;

    @Field(() => [TagDistinctFieldEnum], {
        nullable: true,
        description: undefined,
    })
    distinct?: Array<TagDistinctFieldEnum>;

    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    count?: true;
}
