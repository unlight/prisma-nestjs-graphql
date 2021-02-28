import { Field, InputType } from '@nestjs/graphql';

import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';
import { BytesWithAggregatesFilter } from '../prisma/bytes-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class DummyScalarWhereWithAggregatesInput {
    @Field(() => [DummyScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    AND?: Array<DummyScalarWhereWithAggregatesInput>;

    @Field(() => [DummyScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    OR?: Array<DummyScalarWhereWithAggregatesInput>;

    @Field(() => [DummyScalarWhereWithAggregatesInput], {
        nullable: true,
    })
    NOT?: Array<DummyScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {
        nullable: true,
    })
    id?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {
        nullable: true,
    })
    floaty?: FloatWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {
        nullable: true,
    })
    int?: IntWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {
        nullable: true,
    })
    float?: FloatWithAggregatesFilter;

    @Field(() => BytesWithAggregatesFilter, {
        nullable: true,
    })
    bytes?: BytesWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {
        nullable: true,
    })
    decimal?: DecimalWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {
        nullable: true,
    })
    bigInt?: BigIntWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {
        nullable: true,
    })
    json?: JsonWithAggregatesFilter;
}
