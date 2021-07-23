import { ArgsType, Field, Int } from '@nestjs/graphql';

import { TagOrderByWithRelationInput } from './tag-order-by-with-relation.input';
import { TagScalarFieldEnum } from './tag-scalar-field.enum';
import { TagWhereInput } from './tag-where.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@ArgsType()
export class FindFirstTagArgs {
    @Field(() => TagWhereInput, { nullable: true })
    where?: TagWhereInput;

    @Field(() => [TagOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<TagOrderByWithRelationInput>;

    @Field(() => TagWhereUniqueInput, { nullable: true })
    cursor?: TagWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => [TagScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof TagScalarFieldEnum>;
}
