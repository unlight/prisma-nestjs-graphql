import { Field, InputType, Int } from '@nestjs/graphql';

@InputType({})
export class NestedIntFilter {
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

    @Field(() => NestedIntFilter, {
        nullable: true,
        description: undefined,
    })
    not?: NestedIntFilter | null;
}
