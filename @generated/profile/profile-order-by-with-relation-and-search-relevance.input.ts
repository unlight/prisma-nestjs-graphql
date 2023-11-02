import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationAndSearchRelevanceInput } from '../user/user-order-by-with-relation-and-search-relevance.input';
import { Type } from 'class-transformer';
import { ProfileOrderByRelevanceInput } from './profile-order-by-relevance.input';

@InputType()
export class ProfileOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    dummy?: SortOrderInput;

    @Field(() => UserOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    @Type(() => UserOrderByWithRelationAndSearchRelevanceInput)
    user?: UserOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => ProfileOrderByRelevanceInput, {nullable:true})
    _relevance?: ProfileOrderByRelevanceInput;
}
