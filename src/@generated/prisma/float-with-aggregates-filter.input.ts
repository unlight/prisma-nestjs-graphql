import { Field, Float, InputType } from '@nestjs/graphql';

import { FloatFilter } from './float-filter.input';
import { IntFilter } from './int-filter.input';

@InputType()
export class FloatWithAggregatesFilter {
    @Field(() => Float, {
        nullable: true,
    })
    equals?: number;

    @Field(() => [Float], {
        nullable: true,
    })
    in?: Array<number>;

    @Field(() => [Float], {
        nullable: true,
    })
    notIn?: Array<number>;

    @Field(() => Float, {
        nullable: true,
    })
    lt?: number;

    @Field(() => Float, {
        nullable: true,
    })
    lte?: number;

    @Field(() => Float, {
        nullable: true,
    })
    gt?: number;

    @Field(() => Float, {
        nullable: true,
    })
    gte?: number;

    @Field(() => FloatWithAggregatesFilter, {
        nullable: true,
    })
    not?: FloatWithAggregatesFilter;

    @Field(() => IntFilter, {
        nullable: true,
    })
    count?: IntFilter;

    @Field(() => FloatFilter, {
        nullable: true,
    })
    avg?: FloatFilter;

    @Field(() => FloatFilter, {
        nullable: true,
    })
    sum?: FloatFilter;

    @Field(() => FloatFilter, {
        nullable: true,
    })
    min?: FloatFilter;

    @Field(() => FloatFilter, {
        nullable: true,
    })
    max?: FloatFilter;
}
