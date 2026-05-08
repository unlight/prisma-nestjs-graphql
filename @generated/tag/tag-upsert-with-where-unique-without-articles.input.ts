import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input.ts';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { TagUpdateWithoutArticlesInput } from './tag-update-without-articles.input.ts';
import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input.ts';

@InputType()
export class TagUpsertWithWhereUniqueWithoutArticlesInput {
  @Field(() => TagWhereUniqueInput, { nullable: false })
  @Type(() => TagWhereUniqueInput)
  where!: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>;

  @Field(() => TagUpdateWithoutArticlesInput, { nullable: false })
  @Type(() => TagUpdateWithoutArticlesInput)
  update!: Identity<TagUpdateWithoutArticlesInput>;

  @Field(() => TagCreateWithoutArticlesInput, { nullable: false })
  @Type(() => TagCreateWithoutArticlesInput)
  create!: Identity<TagCreateWithoutArticlesInput>;
}
