import { Field, InputType } from '@nestjs/graphql';

import { BigIntFilter } from '../prisma/big-int-filter.input';
import { BytesFilter } from '../prisma/bytes-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class DummyWhereInput {
    @Field(() => [DummyWhereInput], {
        nullable: true,
        description: undefined,
    })
    AND?: DummyWhereInput | Array<DummyWhereInput>;

    @Field(() => [DummyWhereInput], {
        nullable: true,
        description: undefined,
    })
    OR?: DummyWhereInput | Array<DummyWhereInput>;

    @Field(() => [DummyWhereInput], {
        nullable: true,
        description: undefined,
    })
    NOT?: DummyWhereInput | Array<DummyWhereInput>;

    @Field(() => StringFilter, {
        nullable: true,
        description: undefined,
    })
    id?: StringFilter | string;

    @Field(() => BytesFilter, {
        nullable: true,
        description: undefined,
    })
    bytes?: BytesFilter | Buffer | null;

    @Field(() => DecimalFilter, {
        nullable: true,
        description: undefined,
    })
    decimal?: DecimalFilter | string | null;

    @Field(() => BigIntFilter, {
        nullable: true,
        description: undefined,
    })
    bigInt?: BigIntFilter | BigInt | null;

    @Field(() => JsonFilter, {
        nullable: true,
        description: undefined,
    })
    json?: JsonFilter;
}
