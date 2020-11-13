import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class IntFilter {
    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    equals?: number | null;

    @Field(() => [Int], {
        nullable: true,
        description: undefined,
    })
    in?: Array<number> | null;

    @Field(() => [Int], {
        nullable: true,
        description: undefined,
    })
    notIn?: Array<number> | null;

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

    @Field(() => IntFilter, {
        nullable: true,
        description: undefined,
    })
    not?: number | IntFilter | null;
}
