import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TagWhereInput } from './tag-where.input';
import { Type } from 'class-transformer';
import { TagOrderByWithRelationAndSearchRelevanceInput } from './tag-order-by-with-relation-and-search-relevance.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TagScalarFieldEnum } from './tag-scalar-field.enum';

@ArgsType()
export class FindFirstTagOrThrowArgs {
  @Field(() => TagWhereInput, { nullable: true })
  @Type(() => TagWhereInput)
  where?: TagWhereInput;

  @Field(() => [TagOrderByWithRelationAndSearchRelevanceInput], { nullable: true })
  orderBy?: Array<TagOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => TagWhereUniqueInput, { nullable: true })
  cursor?: TagWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [TagScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof TagScalarFieldEnum>;
}
