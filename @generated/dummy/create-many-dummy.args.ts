import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DummyCreateManyInput } from './dummy-create-many.input';

@ArgsType()
export class CreateManyDummyArgs {
  @Field(() => [DummyCreateManyInput], { nullable: false })
  data!: Array<DummyCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
