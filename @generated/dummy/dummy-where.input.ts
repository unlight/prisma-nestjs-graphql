import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { BytesNullableFilter } from '../prisma/bytes-nullable-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DecimalNullableListFilter } from '../prisma/decimal-nullable-list-filter.input';
import { BigIntNullableFilter } from '../prisma/big-int-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class DummyWhereInput {

    @Field(() => [DummyWhereInput], {nullable:true})
    @Type(() => DummyWhereInput)
    AND?: Array<DummyWhereInput>;

    @Field(() => [DummyWhereInput], {nullable:true})
    @Type(() => DummyWhereInput)
    OR?: Array<DummyWhereInput>;

    @Field(() => [DummyWhereInput], {nullable:true})
    @Type(() => DummyWhereInput)
    NOT?: Array<DummyWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date?: DateTimeNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    int?: IntNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    float?: FloatNullableFilter;

    @Field(() => BytesNullableFilter, {nullable:true})
    bytes?: BytesNullableFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    decimal?: DecimalFilter;

    @Field(() => DecimalNullableListFilter, {nullable:true})
    @Type(() => DecimalNullableListFilter)
    decimals?: DecimalNullableListFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    bigInt?: BigIntNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    json?: JsonNullableFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    friends?: StringNullableListFilter;
}
