import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class IntFilter {
    @Field(() => Int, {
        nullable: true,
    })
    equals?: number;

    @Field(() => [Int], {
        nullable: true,
    })
    in?: Array<number>;

    @Field(() => [Int], {
        nullable: true,
    })
    notIn?: Array<number>;

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
    not?: IntFilter;
}
