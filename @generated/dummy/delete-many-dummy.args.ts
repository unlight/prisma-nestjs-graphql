import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DummyWhereInput } from './dummy-where.input';

@ArgsType()
export class DeleteManyDummyArgs {
  @Field(() => DummyWhereInput, { nullable: true })
  where?: DummyWhereInput;
}
