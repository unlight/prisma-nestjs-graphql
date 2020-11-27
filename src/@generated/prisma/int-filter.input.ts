import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class IntFilter {
    @Field(() => Int, {
        nullable: true,
    })
    equals?: number | null;

    @Field(() => [Int], {
        nullable: true,
    })
    in?: Array<number> | null;

    @Field(() => [Int], {
        nullable: true,
    })
    notIn?: Array<number> | null;

    @Field(() => Int, {
        nullable: true,
    })
    lt?: number;

    @Field(() => Int, {
        nullable: true,
    })
    lte?: number;

    @Field(() => Int, {
        nullable: true,
    })
    gt?: number;

    @Field(() => Int, {
        nullable: true,
    })
    gte?: number;

    @Field(() => IntFilter, {
        nullable: true,
    })
    not?: number | IntFilter | null;
}
