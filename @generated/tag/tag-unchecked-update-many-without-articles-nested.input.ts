import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input.ts';
import { Type } from 'class-transformer';
import { TagCreateOrConnectWithoutArticlesInput } from './tag-create-or-connect-without-articles.input.ts';
import { TagUpsertWithWhereUniqueWithoutArticlesInput } from './tag-upsert-with-where-unique-without-articles.input.ts';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input.ts';
import { TagUpdateWithWhereUniqueWithoutArticlesInput } from './tag-update-with-where-unique-without-articles.input.ts';
import { TagUpdateManyWithWhereWithoutArticlesInput } from './tag-update-many-with-where-without-articles.input.ts';
import { TagScalarWhereInput } from './tag-scalar-where.input.ts';

@InputType()
export class TagUncheckedUpdateManyWithoutArticlesNestedInput {
  @Field(() => [TagCreateWithoutArticlesInput], { nullable: true })
  @Type(() => TagCreateWithoutArticlesInput)
  create?: Array<TagCreateWithoutArticlesInput>;

  @Field(() => [TagCreateOrConnectWithoutArticlesInput], { nullable: true })
  @Type(() => TagCreateOrConnectWithoutArticlesInput)
  connectOrCreate?: Array<TagCreateOrConnectWithoutArticlesInput>;

  @Field(() => [TagUpsertWithWhereUniqueWithoutArticlesInput], {
    nullable: true,
  })
  @Type(() => TagUpsertWithWhereUniqueWithoutArticlesInput)
  upsert?: Array<TagUpsertWithWhereUniqueWithoutArticlesInput>;

  @Field(() => [TagWhereUniqueInput], { nullable: true })
  @Type(() => TagWhereUniqueInput)
  set?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;

  @Field(() => [TagWhereUniqueInput], { nullable: true })
  @Type(() => TagWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;

  @Field(() => [TagWhereUniqueInput], { nullable: true })
  @Type(() => TagWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;

  @Field(() => [TagWhereUniqueInput], { nullable: true })
  @Type(() => TagWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;

  @Field(() => [TagUpdateWithWhereUniqueWithoutArticlesInput], {
    nullable: true,
  })
  @Type(() => TagUpdateWithWhereUniqueWithoutArticlesInput)
  update?: Array<TagUpdateWithWhereUniqueWithoutArticlesInput>;

  @Field(() => [TagUpdateManyWithWhereWithoutArticlesInput], { nullable: true })
  @Type(() => TagUpdateManyWithWhereWithoutArticlesInput)
  updateMany?: Array<TagUpdateManyWithWhereWithoutArticlesInput>;

  @Field(() => [TagScalarWhereInput], { nullable: true })
  @Type(() => TagScalarWhereInput)
  deleteMany?: Array<TagScalarWhereInput>;
}
