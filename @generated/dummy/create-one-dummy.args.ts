import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DummyCreateInput } from './dummy-create.input';

@ArgsType()
export class CreateOneDummyArgs {
  @Field(() => DummyCreateInput, { nullable: false })
  data!: DummyCreateInput;
}
