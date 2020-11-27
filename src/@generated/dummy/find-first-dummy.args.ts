import { ArgsType, Field, Int } from '@nestjs/graphql';

import { DummyDistinctFieldEnum } from './dummy-distinct-field.enum';
import { DummyOrderByInput } from './dummy-order-by.input';
import { DummyWhereInput } from './dummy-where.input';
import { DummyWhereUniqueInput } from './dummy-where-unique.input';

@ArgsType()
export class FindFirstDummyArgs {
    @Field(() => DummyWhereInput, {
        nullable: true,
    })
    where?: DummyWhereInput;

    @Field(() => [DummyOrderByInput], {
        nullable: true,
    })
    orderBy?: Array<DummyOrderByInput> | DummyOrderByInput;

    @Field(() => DummyWhereUniqueInput, {
        nullable: true,
    })
    cursor?: DummyWhereUniqueInput;

    @Field(() => Int, {
        nullable: true,
    })
    take?: number;

    @Field(() => Int, {
        nullable: true,
    })
    skip?: number;

    @Field(() => [DummyDistinctFieldEnum], {
        nullable: true,
    })
    distinct?: Array<DummyDistinctFieldEnum>;
}
