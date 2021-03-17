import { Field, Float, InputType } from '@nestjs/graphql';

import { NestedFloatFilter } from './nested-float-filter.input';

@InputType()
export class FloatFilter {
    @Field(() => Float, { nullable: true })
    equals?: number;

    @Field(() => [Float], { nullable: true })
    in?: Array<number>;

    @Field(() => [Float], { nullable: true })
    notIn?: Array<number>;

    @Field(() => Float, { nullable: true })
    lt?: number;

    @Field(() => Float, { nullable: true })
    lte?: number;

    @Field(() => Float, { nullable: true })
    gt?: number;

    @Field(() => Float, { nullable: true })
    gte?: number;

    @Field(() => NestedFloatFilter, { nullable: true })
    not?: NestedFloatFilter;
}
