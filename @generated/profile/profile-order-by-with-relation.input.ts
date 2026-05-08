import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum.ts';
import type { Identity } from 'identity-type';
import { SortOrderInput } from '../prisma/sort-order.input.ts';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input.ts';
import { Type } from 'class-transformer';

@InputType()
export class ProfileOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  userId?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  dummy?: Identity<SortOrderInput>;

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  @Type(() => UserOrderByWithRelationInput)
  user?: Identity<UserOrderByWithRelationInput>;
}
