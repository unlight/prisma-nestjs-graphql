import { ArgsType, Field, Int } from '@nestjs/graphql';

import { DummyOrderByInput } from './dummy-order-by.input';
import { DummyScalarFieldEnum } from './dummy-scalar-field.enum';
import { DummyWhereInput } from './dummy-where.input';
import { DummyWhereUniqueInput } from './dummy-where-unique.input';

@ArgsType()
export class FindFirstDummyArgs {
    @Field(() => DummyWhereInput, { nullable: true })
    where?: DummyWhereInput;

    @Field(() => [DummyOrderByInput], { nullable: true })
    orderBy?: Array<DummyOrderByInput>;

    @Field(() => DummyWhereUniqueInput, { nullable: true })
    cursor?: DummyWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => [DummyScalarFieldEnum], { nullable: true })
    distinct?: Array<DummyScalarFieldEnum>;
}
