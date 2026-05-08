import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TagUpdateInput } from './tag-update.input.ts';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input.ts';

@ArgsType()
export class UpdateOneTagArgs {
  @Field(() => TagUpdateInput, { nullable: false })
  @Type(() => TagUpdateInput)
  data!: Identity<TagUpdateInput>;

  @Field(() => TagWhereUniqueInput, { nullable: false })
  @Type(() => TagWhereUniqueInput)
  where!: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>;
}
