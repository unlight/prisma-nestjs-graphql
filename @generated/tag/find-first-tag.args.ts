import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TagWhereInput } from './tag-where.input';
import { Type } from 'class-transformer';
import { TagOrderByWithRelationInput } from './tag-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TagScalarFieldEnum } from './tag-scalar-field.enum';

@ArgsType()
export class FindFirstTagArgs {

    @Field(() => TagWhereInput, {nullable:true})
    @Type(() => TagWhereInput)
    where?: TagWhereInput;

    @Field(() => [TagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TagOrderByWithRelationInput>;

    @Field(() => TagWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TagScalarFieldEnum], {nullable:true})
    distinct?: Array<`${TagScalarFieldEnum}`>;
}
