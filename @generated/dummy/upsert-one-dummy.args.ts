import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DummyWhereUniqueInput } from './dummy-where-unique.input';
import { DummyCreateInput } from './dummy-create.input';
import { DummyUpdateInput } from './dummy-update.input';

@ArgsType()
export class UpsertOneDummyArgs {
  @Field(() => DummyWhereUniqueInput, { nullable: false })
  where!: DummyWhereUniqueInput;

  @Field(() => DummyCreateInput, { nullable: false })
  create!: DummyCreateInput;

  @Field(() => DummyUpdateInput, { nullable: false })
  update!: DummyUpdateInput;
}
