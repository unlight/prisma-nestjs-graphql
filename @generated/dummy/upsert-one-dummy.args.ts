import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DummyWhereUniqueInput } from './dummy-where-unique.input.ts';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { DummyCreateInput } from './dummy-create.input.ts';
import { DummyUpdateInput } from './dummy-update.input.ts';

@ArgsType()
export class UpsertOneDummyArgs {
  @Field(() => DummyWhereUniqueInput, { nullable: false })
  @Type(() => DummyWhereUniqueInput)
  where!: Prisma.AtLeast<DummyWhereUniqueInput, 'id'>;

  @Field(() => DummyCreateInput, { nullable: false })
  @Type(() => DummyCreateInput)
  create!: Identity<DummyCreateInput>;

  @Field(() => DummyUpdateInput, { nullable: false })
  @Type(() => DummyUpdateInput)
  update!: Identity<DummyUpdateInput>;
}
