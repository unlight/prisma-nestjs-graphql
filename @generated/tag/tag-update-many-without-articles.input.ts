import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';
import { Type } from 'class-transformer';
import { TagCreateOrConnectWithoutArticlesInput } from './tag-create-or-connect-without-articles.input';
import { TagUpsertWithWhereUniqueWithoutArticlesInput } from './tag-upsert-with-where-unique-without-articles.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithWhereUniqueWithoutArticlesInput } from './tag-update-with-where-unique-without-articles.input';
import { TagUpdateManyWithWhereWithoutArticlesInput } from './tag-update-many-with-where-without-articles.input';
import { TagScalarWhereInput } from './tag-scalar-where.input';

@InputType()
export class TagUpdateManyWithoutArticlesInput {
  @Field(() => [TagCreateWithoutArticlesInput], { nullable: true })
  @Type(() => TagCreateWithoutArticlesInput)
  create?: Array<TagCreateWithoutArticlesInput>;

  @Field(() => [TagCreateOrConnectWithoutArticlesInput], { nullable: true })
  @Type(() => TagCreateOrConnectWithoutArticlesInput)
  connectOrCreate?: Array<TagCreateOrConnectWithoutArticlesInput>;

  @Field(() => [TagUpsertWithWhereUniqueWithoutArticlesInput], { nullable: true })
  @Type(() => TagUpsertWithWhereUniqueWithoutArticlesInput)
  upsert?: Array<TagUpsertWithWhereUniqueWithoutArticlesInput>;

  @Field(() => [TagWhereUniqueInput], { nullable: true })
  @Type(() => TagWhereUniqueInput)
  set?: Array<TagWhereUniqueInput>;

  @Field(() => [TagWhereUniqueInput], { nullable: true })
  @Type(() => TagWhereUniqueInput)
  disconnect?: Array<TagWhereUniqueInput>;

  @Field(() => [TagWhereUniqueInput], { nullable: true })
  @Type(() => TagWhereUniqueInput)
  delete?: Array<TagWhereUniqueInput>;

  @Field(() => [TagWhereUniqueInput], { nullable: true })
  @Type(() => TagWhereUniqueInput)
  connect?: Array<TagWhereUniqueInput>;

  @Field(() => [TagUpdateWithWhereUniqueWithoutArticlesInput], { nullable: true })
  @Type(() => TagUpdateWithWhereUniqueWithoutArticlesInput)
  update?: Array<TagUpdateWithWhereUniqueWithoutArticlesInput>;

  @Field(() => [TagUpdateManyWithWhereWithoutArticlesInput], { nullable: true })
  @Type(() => TagUpdateManyWithWhereWithoutArticlesInput)
  updateMany?: Array<TagUpdateManyWithWhereWithoutArticlesInput>;

  @Field(() => [TagScalarWhereInput], { nullable: true })
  @Type(() => TagScalarWhereInput)
  deleteMany?: Array<TagScalarWhereInput>;
}
