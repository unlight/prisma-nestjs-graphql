import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DummyUpdateManyMutationInput } from './dummy-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DummyWhereInput } from './dummy-where.input';

@ArgsType()
export class UpdateManyDummyArgs {
  @Field(() => DummyUpdateManyMutationInput, { nullable: false })
  @Type(() => DummyUpdateManyMutationInput)
  data!: DummyUpdateManyMutationInput;

  @Field(() => DummyWhereInput, { nullable: true })
  @Type(() => DummyWhereInput)
  where?: DummyWhereInput;
}
