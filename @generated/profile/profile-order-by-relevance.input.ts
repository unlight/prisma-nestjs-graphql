import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileOrderByRelevanceFieldEnum } from './profile-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ProfileOrderByRelevanceInput {
  @Field(() => [ProfileOrderByRelevanceFieldEnum], { nullable: false })
  fields!: Array<keyof typeof ProfileOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
