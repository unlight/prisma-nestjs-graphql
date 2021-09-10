import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TagWhereInput } from './tag-where.input';
import { TagOrderByWithRelationInput } from './tag-order-by-with-relation.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TagScalarFieldEnum } from './tag-scalar-field.enum';

@ArgsType()
export class FindManyTagArgs {
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
