import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input.ts';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutAuthorInput } from './comment-create-or-connect-without-author.input.ts';
import { CommentCreateManyAuthorInputEnvelope } from './comment-create-many-author-input-envelope.input.ts';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input.ts';

@InputType()
export class CommentUncheckedCreateNestedManyWithoutAuthorInput {
  @Field(() => [CommentCreateWithoutAuthorInput], { nullable: true })
  @Type(() => CommentCreateWithoutAuthorInput)
  create?: Array<CommentCreateWithoutAuthorInput>;

  @Field(() => [CommentCreateOrConnectWithoutAuthorInput], { nullable: true })
  @Type(() => CommentCreateOrConnectWithoutAuthorInput)
  connectOrCreate?: Array<CommentCreateOrConnectWithoutAuthorInput>;

  @Field(() => CommentCreateManyAuthorInputEnvelope, { nullable: true })
  @Type(() => CommentCreateManyAuthorInputEnvelope)
  createMany?: CommentCreateManyAuthorInputEnvelope;

  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}
