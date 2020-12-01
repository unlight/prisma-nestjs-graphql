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
    })
    AND?: DummyWhereInput | Array<DummyWhereInput>;

    @Field(() => [DummyWhereInput], {
        nullable: true,
    })
    OR?: DummyWhereInput | Array<DummyWhereInput>;

    @Field(() => [DummyWhereInput], {
        nullable: true,
    })
    NOT?: DummyWhereInput | Array<DummyWhereInput>;

    @Field(() => StringFilter, {
        nullable: true,
    })
    id?: StringFilter | string;

    @Field(() => BytesFilter, {
        nullable: true,
    })
    bytes?: BytesFilter | Buffer;

    @Field(() => DecimalFilter, {
        nullable: true,
    })
    decimal?: DecimalFilter | string;

    @Field(() => BigIntFilter, {
        nullable: true,
    })
    bigInt?: BigIntFilter | BigInt;

    @Field(() => JsonFilter, {
        nullable: true,
    })
    json?: JsonFilter;
}
