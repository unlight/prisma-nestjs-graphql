import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DummyUpdateInput } from './dummy-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DummyWhereUniqueInput } from './dummy-where-unique.input';

@ArgsType()
export class UpdateOneDummyArgs {
  @Field(() => DummyUpdateInput, { nullable: false })
  @Type(() => DummyUpdateInput)
  data!: DummyUpdateInput;

  @Field(() => DummyWhereUniqueInput, { nullable: false })
  @Type(() => DummyWhereUniqueInput)
  where!: Prisma.AtLeast<DummyWhereUniqueInput, 'id'>;
}
