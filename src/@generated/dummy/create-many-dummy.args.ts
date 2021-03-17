import { ArgsType, Field } from '@nestjs/graphql';

import { DummyCreateManyInput } from './dummy-create-many.input';

@ArgsType()
export class CreateManyDummyArgs {
    @Field(() => [DummyCreateManyInput], { nullable: false })
    data!: Array<DummyCreateManyInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
