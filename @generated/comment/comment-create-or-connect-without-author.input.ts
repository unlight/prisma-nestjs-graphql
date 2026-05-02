import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input.ts';
import { Type } from 'class-transformer';
import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input.ts';

@InputType()
export class CommentCreateOrConnectWithoutAuthorInput {
  @Field(() => CommentWhereUniqueInput, { nullable: false })
  @Type(() => CommentWhereUniqueInput)
  where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;

  @Field(() => CommentCreateWithoutAuthorInput, { nullable: false })
  @Type(() => CommentCreateWithoutAuthorInput)
  create!: CommentCreateWithoutAuthorInput;
}
