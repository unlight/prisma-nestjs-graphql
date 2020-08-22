import { Field, InputType, Int } from '@nestjs/graphql';

import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';

@InputType({})
export class IntNullableFilter {
    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    equals?: number | null;

    @Field(() => [Int], {
        nullable: true,
        description: undefined,
    })
    in?: number | number[] | null;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    lt?: number | null;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    lte?: number | null;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    gt?: number | null;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    gte?: number | null;

    @Field(() => NestedIntNullableFilter, {
        nullable: true,
        description: undefined,
    })
    not?: NestedIntNullableFilter | null;
}
