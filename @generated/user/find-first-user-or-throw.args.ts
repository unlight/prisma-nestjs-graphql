import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input.ts';
import { Type } from 'class-transformer';
import { UserOrderByWithRelationInput } from './user-order-by-with-relation.input.ts';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input.ts';
import { Int } from '@nestjs/graphql';
import { UserScalarFieldEnum } from './user-scalar-field.enum.ts';

@ArgsType()
export class FindFirstUserOrThrowArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;

  @Field(() => [UserOrderByWithRelationInput], { nullable: true })
  @Type(() => UserOrderByWithRelationInput)
  orderBy?: Array<UserOrderByWithRelationInput>;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  cursor?: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'name' | 'email_name'
  >;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [UserScalarFieldEnum], { nullable: true })
  distinct?: Array<`${UserScalarFieldEnum}`>;
}
