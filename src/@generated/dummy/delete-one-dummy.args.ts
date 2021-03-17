import { ArgsType, Field } from '@nestjs/graphql';

import { DummyWhereUniqueInput } from './dummy-where-unique.input';

@ArgsType()
export class DeleteOneDummyArgs {
    @Field(() => DummyWhereUniqueInput, { nullable: false })
    where!: DummyWhereUniqueInput;
}
