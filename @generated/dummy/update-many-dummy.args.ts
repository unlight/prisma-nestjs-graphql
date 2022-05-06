import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DummyUpdateManyMutationInput } from './dummy-update-many-mutation.input';
import { DummyWhereInput } from './dummy-where.input';

@ArgsType()
export class UpdateManyDummyArgs {
  @Field(() => DummyUpdateManyMutationInput, { nullable: false })
  data!: DummyUpdateManyMutationInput;

  @Field(() => DummyWhereInput, { nullable: true })
  where?: DummyWhereInput;
}
