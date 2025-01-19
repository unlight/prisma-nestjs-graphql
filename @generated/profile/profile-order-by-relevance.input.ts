import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileOrderByRelevanceFieldEnum } from './profile-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ProfileOrderByRelevanceInput {
  @Field(() => [ProfileOrderByRelevanceFieldEnum], { nullable: false })
  fields!: Array<`${ProfileOrderByRelevanceFieldEnum}`>;

  @Field(() => SortOrder, { nullable: false })
  sort!: `${SortOrder}`;

  @Field(() => String, { nullable: false })
  search!: string;
}
