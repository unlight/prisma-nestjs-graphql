import { ArgsType, Field } from '@nestjs/graphql';

import { DummyWhereUniqueInput } from './dummy-where-unique.input';

@ArgsType()
export class FindOneDummyArgs {
  @Field(() => DummyWhereUniqueInput, {
    nullable: true,
  })
  where?: DummyWhereUniqueInput;
}
