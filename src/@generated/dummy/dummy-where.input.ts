import { Field, InputType } from '@nestjs/graphql';

import { BigIntNullableFilter } from '../prisma/big-int-nullable-filter.input';
import { BytesNullableFilter } from '../prisma/bytes-nullable-filter.input';
import { DecimalNullableFilter } from '../prisma/decimal-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class DummyWhereInput {
    @Field(() => [DummyWhereInput], { nullable: true })
    AND?: Array<DummyWhereInput>;

    @Field(() => [DummyWhereInput], { nullable: true })
    OR?: Array<DummyWhereInput>;

    @Field(() => [DummyWhereInput], { nullable: true })
    NOT?: Array<DummyWhereInput>;

    @Field(() => StringFilter, { nullable: true })
    id?: StringFilter;

    @Field(() => FloatFilter, { nullable: true })
    floaty?: FloatFilter;

    @Field(() => IntNullableFilter, { nullable: true })
    int?: IntNullableFilter;

    @Field(() => FloatNullableFilter, { nullable: true })
    float?: FloatNullableFilter;

    @Field(() => BytesNullableFilter, { nullable: true })
    bytes?: BytesNullableFilter;

    @Field(() => DecimalNullableFilter, { nullable: true })
    decimal?: DecimalNullableFilter;

    @Field(() => BigIntNullableFilter, { nullable: true })
    bigInt?: BigIntNullableFilter;

    @Field(() => JsonNullableFilter, { nullable: true })
    json?: JsonNullableFilter;
}
