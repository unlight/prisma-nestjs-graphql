import { Field, InputType } from '@nestjs/graphql';

import { BigIntNullableWithAggregatesFilter } from '../prisma/big-int-nullable-with-aggregates-filter.input';
import { BytesNullableWithAggregatesFilter } from '../prisma/bytes-nullable-with-aggregates-filter.input';
import { DecimalNullableWithAggregatesFilter } from '../prisma/decimal-nullable-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class DummyScalarWhereWithAggregatesInput {
    @Field(() => [DummyScalarWhereWithAggregatesInput], { nullable: true })
    AND?: Array<DummyScalarWhereWithAggregatesInput>;

    @Field(() => [DummyScalarWhereWithAggregatesInput], { nullable: true })
    OR?: Array<DummyScalarWhereWithAggregatesInput>;

    @Field(() => [DummyScalarWhereWithAggregatesInput], { nullable: true })
    NOT?: Array<DummyScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    id?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, { nullable: true })
    floaty?: FloatWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
    int?: IntNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, { nullable: true })
    float?: FloatNullableWithAggregatesFilter;

    @Field(() => BytesNullableWithAggregatesFilter, { nullable: true })
    bytes?: BytesNullableWithAggregatesFilter;

    @Field(() => DecimalNullableWithAggregatesFilter, { nullable: true })
    decimal?: DecimalNullableWithAggregatesFilter;

    @Field(() => BigIntNullableWithAggregatesFilter, { nullable: true })
    bigInt?: BigIntNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, { nullable: true })
    json?: JsonNullableWithAggregatesFilter;
}
