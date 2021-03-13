import { ArgsType, Field } from '@nestjs/graphql';

import { DummyCreateInput } from './dummy-create.input';

@ArgsType()
export class CreateOneDummyArgs {
    @Field(() => DummyCreateInput, { nullable: false })
    data!: DummyCreateInput;
}
