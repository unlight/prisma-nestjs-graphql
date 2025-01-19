import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProfileWhereInput } from './profile-where.input';
import { Type } from 'class-transformer';
import { ProfileOrderByWithRelationInput } from './profile-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProfileWhereUniqueInput } from './profile-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProfileScalarFieldEnum } from './profile-scalar-field.enum';

@ArgsType()
export class FindManyProfileArgs {
  @Field(() => ProfileWhereInput, { nullable: true })
  @Type(() => ProfileWhereInput)
  where?: ProfileWhereInput;

  @Field(() => [ProfileOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ProfileOrderByWithRelationInput>;

  @Field(() => ProfileWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<ProfileWhereUniqueInput, 'id' | 'userId'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [ProfileScalarFieldEnum], { nullable: true })
  distinct?: Array<`${ProfileScalarFieldEnum}`>;
}
