import { Field, InputType, Int } from '@nestjs/graphql';

@InputType({})
export class NullableIntFilter {
    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    equals?: number | null;

    @Field(() => NullableIntFilter, {
        nullable: true,
        description: undefined,
    })
    not?: number | null | NullableIntFilter;

    @Field(() => [Int], {
        nullable: true,
        description: undefined,
    })
    in?: number | Array<number> | null;

    @Field(() => [Int], {
        nullable: true,
        description: undefined,
    })
    notIn?: number | Array<number> | null;

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
}
