import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum.ts';
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
  dummy?: SortOrderInput;

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  @Type(() => UserOrderByWithRelationInput)
  user?: UserOrderByWithRelationInput;
}
