import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentWhereInput } from './comment-where.input.ts';
import { Type } from 'class-transformer';
import { CommentOrderByWithRelationInput } from './comment-order-by-with-relation.input.ts';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input.ts';
import { Int } from '@nestjs/graphql';
import { CommentScalarFieldEnum } from './comment-scalar-field.enum.ts';

@ArgsType()
export class FindManyCommentArgs {
  @Field(() => CommentWhereInput, { nullable: true })
  @Type(() => CommentWhereInput)
  where?: CommentWhereInput;

  @Field(() => [CommentOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<CommentOrderByWithRelationInput>;

  @Field(() => CommentWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [CommentScalarFieldEnum], { nullable: true })
  distinct?: Array<`${CommentScalarFieldEnum}`>;
}
