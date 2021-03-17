import { ArgsType, Field } from '@nestjs/graphql';

import { DummyUpdateInput } from './dummy-update.input';
import { DummyWhereUniqueInput } from './dummy-where-unique.input';

@ArgsType()
export class UpdateOneDummyArgs {
    @Field(() => DummyUpdateInput, { nullable: false })
    data!: DummyUpdateInput;

    @Field(() => DummyWhereUniqueInput, { nullable: false })
    where!: DummyWhereUniqueInput;
}
