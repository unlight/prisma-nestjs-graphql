import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DummyWhereUniqueInput } from './dummy-where-unique.input';
import { Type } from 'class-transformer';
import { DummyCreateInput } from './dummy-create.input';
import { DummyUpdateInput } from './dummy-update.input';

@ArgsType()
export class UpsertOneDummyArgs {
  @Field(() => DummyWhereUniqueInput, { nullable: false })
  @Type(() => DummyWhereUniqueInput)
  where!: DummyWhereUniqueInput;

  @Field(() => DummyCreateInput, { nullable: false })
  @Type(() => DummyCreateInput)
  create!: DummyCreateInput;

  @Field(() => DummyUpdateInput, { nullable: false })
  @Type(() => DummyUpdateInput)
  update!: DummyUpdateInput;
}
