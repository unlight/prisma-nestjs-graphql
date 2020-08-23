import { Field, InputType, Int } from '@nestjs/graphql';

@InputType({})
export class NestedIntFilter {
    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    equals?: number;

    @Field(() => [Int], {
        nullable: true,
        description: undefined,
    })
    in?: number | Array<number>;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    lt?: number;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    lte?: number;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    gt?: number;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    gte?: number;

    @Field(() => NestedIntFilter, {
        nullable: true,
        description: undefined,
    })
    not?: NestedIntFilter | null;
}
