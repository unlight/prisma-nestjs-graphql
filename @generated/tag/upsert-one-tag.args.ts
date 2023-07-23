import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagCreateInput } from './tag-create.input';
import { TagUpdateInput } from './tag-update.input';

@ArgsType()
export class UpsertOneTagArgs {
  @Field(() => TagWhereUniqueInput, { nullable: false })
  @Type(() => TagWhereUniqueInput)
  where!: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>;

  @Field(() => TagCreateInput, { nullable: false })
  @Type(() => TagCreateInput)
  create!: TagCreateInput;

  @Field(() => TagUpdateInput, { nullable: false })
  @Type(() => TagUpdateInput)
  update!: TagUpdateInput;
}
