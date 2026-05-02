import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input.ts';
import { Type } from 'class-transformer';
import { CommentCreateOrConnectWithoutAuthorInput } from './comment-create-or-connect-without-author.input.ts';
import { CommentUpsertWithWhereUniqueWithoutAuthorInput } from './comment-upsert-with-where-unique-without-author.input.ts';
import { CommentCreateManyAuthorInputEnvelope } from './comment-create-many-author-input-envelope.input.ts';
import { Prisma } from '@prisma/client';
import { CommentWhereUniqueInput } from './comment-where-unique.input.ts';
import { CommentUpdateWithWhereUniqueWithoutAuthorInput } from './comment-update-with-where-unique-without-author.input.ts';
import { CommentUpdateManyWithWhereWithoutAuthorInput } from './comment-update-many-with-where-without-author.input.ts';
import { CommentScalarWhereInput } from './comment-scalar-where.input.ts';

@InputType()
export class CommentUpdateManyWithoutAuthorNestedInput {
  @Field(() => [CommentCreateWithoutAuthorInput], { nullable: true })
  @Type(() => CommentCreateWithoutAuthorInput)
  create?: Array<CommentCreateWithoutAuthorInput>;

  @Field(() => [CommentCreateOrConnectWithoutAuthorInput], { nullable: true })
  @Type(() => CommentCreateOrConnectWithoutAuthorInput)
  connectOrCreate?: Array<CommentCreateOrConnectWithoutAuthorInput>;

  @Field(() => [CommentUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
  })
  @Type(() => CommentUpsertWithWhereUniqueWithoutAuthorInput)
  upsert?: Array<CommentUpsertWithWhereUniqueWithoutAuthorInput>;

  @Field(() => CommentCreateManyAuthorInputEnvelope, { nullable: true })
  @Type(() => CommentCreateManyAuthorInputEnvelope)
  createMany?: CommentCreateManyAuthorInputEnvelope;

  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

  @Field(() => [CommentWhereUniqueInput], { nullable: true })
  @Type(() => CommentWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;

  @Field(() => [CommentUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true,
  })
  @Type(() => CommentUpdateWithWhereUniqueWithoutAuthorInput)
  update?: Array<CommentUpdateWithWhereUniqueWithoutAuthorInput>;

  @Field(() => [CommentUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true,
  })
  @Type(() => CommentUpdateManyWithWhereWithoutAuthorInput)
  updateMany?: Array<CommentUpdateManyWithWhereWithoutAuthorInput>;

  @Field(() => [CommentScalarWhereInput], { nullable: true })
  @Type(() => CommentScalarWhereInput)
  deleteMany?: Array<CommentScalarWhereInput>;
}
