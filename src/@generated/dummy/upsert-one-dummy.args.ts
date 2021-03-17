import { ArgsType, Field } from '@nestjs/graphql';

import { DummyCreateInput } from './dummy-create.input';
import { DummyUpdateInput } from './dummy-update.input';
import { DummyWhereUniqueInput } from './dummy-where-unique.input';

@ArgsType()
export class UpsertOneDummyArgs {
    @Field(() => DummyWhereUniqueInput, { nullable: false })
    where!: DummyWhereUniqueInput;

    @Field(() => DummyCreateInput, { nullable: false })
    create!: DummyCreateInput;

    @Field(() => DummyUpdateInput, { nullable: false })
    update!: DummyUpdateInput;
}
