import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum.ts';
import type { Identity } from 'identity-type';
import { SortOrderInput } from '../prisma/sort-order.input.ts';

@InputType()
export class DummyOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  date?: Identity<SortOrderInput>;

  @Field(() => SortOrderInput, { nullable: true })
  int?: Identity<SortOrderInput>;

  @Field(() => SortOrderInput, { nullable: true })
  float?: Identity<SortOrderInput>;

  @Field(() => SortOrderInput, { nullable: true })
  bytes?: Identity<SortOrderInput>;

  @Field(() => SortOrder, { nullable: true })
  decimal?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  decimals?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  bigInt?: Identity<SortOrderInput>;

  @Field(() => SortOrderInput, { nullable: true })
  json?: Identity<SortOrderInput>;

  @Field(() => SortOrder, { nullable: true })
  friends?: `${SortOrder}`;
}
