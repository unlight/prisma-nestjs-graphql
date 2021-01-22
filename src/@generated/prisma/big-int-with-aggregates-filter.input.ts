import { Field, InputType } from '@nestjs/graphql';

import { BigIntFilter } from './big-int-filter.input';
import { FloatFilter } from './float-filter.input';
import { IntFilter } from './int-filter.input';

@InputType()
export class BigIntWithAggregatesFilter {
    @Field(() => String, {
        nullable: true,
    })
    equals?: BigInt;

    @Field(() => [String], {
        nullable: true,
    })
    in?: Array<BigInt>;

    @Field(() => [String], {
        nullable: true,
    })
    notIn?: Array<BigInt>;

    @Field(() => String, {
        nullable: true,
    })
    lt?: BigInt;

    @Field(() => String, {
        nullable: true,
    })
    lte?: BigInt;

    @Field(() => String, {
        nullable: true,
    })
    gt?: BigInt;

    @Field(() => String, {
        nullable: true,
    })
    gte?: BigInt;

    @Field(() => BigIntWithAggregatesFilter, {
        nullable: true,
    })
    not?: BigInt | BigIntWithAggregatesFilter;

    @Field(() => IntFilter, {
        nullable: true,
    })
    count?: IntFilter;

    @Field(() => FloatFilter, {
        nullable: true,
    })
    avg?: FloatFilter;

    @Field(() => BigIntFilter, {
        nullable: true,
    })
    sum?: BigIntFilter;

    @Field(() => BigIntFilter, {
        nullable: true,
    })
    min?: BigIntFilter;

    @Field(() => BigIntFilter, {
        nullable: true,
    })
    max?: BigIntFilter;
}
