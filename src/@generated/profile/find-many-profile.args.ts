import { ArgsType, Field, Int } from '@nestjs/graphql';

import { ProfileOrderByWithRelationInput } from './profile-order-by-with-relation.input';
import { ProfileScalarFieldEnum } from './profile-scalar-field.enum';
import { ProfileWhereInput } from './profile-where.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';

@ArgsType()
export class FindManyProfileArgs {
    @Field(() => ProfileWhereInput, { nullable: true })
    where?: ProfileWhereInput;

    @Field(() => [ProfileOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<ProfileOrderByWithRelationInput>;

    @Field(() => ProfileWhereUniqueInput, { nullable: true })
    cursor?: ProfileWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => [ProfileScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof ProfileScalarFieldEnum>;
}
