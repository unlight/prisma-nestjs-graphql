import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input';
import { ProfileOrderByWithRelationInput } from './profile-order-by-with-relation.input';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProfileScalarFieldEnum } from './profile-scalar-field.enum';

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
