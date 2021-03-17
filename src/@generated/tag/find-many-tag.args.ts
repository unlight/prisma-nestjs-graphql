import { ArgsType, Field, Int } from '@nestjs/graphql';

import { TagOrderByInput } from './tag-order-by.input';
import { TagScalarFieldEnum } from './tag-scalar-field.enum';
import { TagWhereInput } from './tag-where.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@ArgsType()
export class FindManyTagArgs {
    @Field(() => TagWhereInput, { nullable: true })
    where?: TagWhereInput;

    @Field(() => [TagOrderByInput], { nullable: true })
    orderBy?: Array<TagOrderByInput>;

    @Field(() => TagWhereUniqueInput, { nullable: true })
    cursor?: TagWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => [TagScalarFieldEnum], { nullable: true })
    distinct?: Array<TagScalarFieldEnum>;
}
