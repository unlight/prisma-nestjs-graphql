import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input.ts';
import { Type } from 'class-transformer';
import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input.ts';

@InputType()
export class TagCreateOrConnectWithoutArticlesInput {
  @Field(() => TagWhereUniqueInput, { nullable: false })
  @Type(() => TagWhereUniqueInput)
  where!: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>;

  @Field(() => TagCreateWithoutArticlesInput, { nullable: false })
  @Type(() => TagCreateWithoutArticlesInput)
  create!: TagCreateWithoutArticlesInput;
}
