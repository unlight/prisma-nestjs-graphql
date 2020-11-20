import { ArgsType, Field, Int } from '@nestjs/graphql';

import { DummyDistinctFieldEnum } from './dummy-distinct-field.enum';
import { DummyOrderByInput } from './dummy-order-by.input';
import { DummyWhereInput } from './dummy-where.input';
import { DummyWhereUniqueInput } from './dummy-where-unique.input';

@ArgsType()
export class FindManyDummyArgs {
    @Field(() => DummyWhereInput, {
        nullable: true,
        description: undefined,
    })
    where?: DummyWhereInput;

    @Field(() => [DummyOrderByInput], {
        nullable: true,
        description: undefined,
    })
    orderBy?: Array<DummyOrderByInput> | DummyOrderByInput;

    @Field(() => DummyWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    cursor?: DummyWhereUniqueInput;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    take?: number;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    skip?: number;

    @Field(() => [DummyDistinctFieldEnum], {
        nullable: true,
        description: undefined,
    })
    distinct?: Array<DummyDistinctFieldEnum>;
}
