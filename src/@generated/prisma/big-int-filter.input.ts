import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BigIntFilter {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    equals?: BigInt | null;

    @Field(() => [String], {
        nullable: true,
        description: undefined,
    })
    in?: Array<BigInt> | null;

    @Field(() => [String], {
        nullable: true,
        description: undefined,
    })
    notIn?: Array<BigInt> | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    lt?: BigInt;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    lte?: BigInt;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    gt?: BigInt;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    gte?: BigInt;

    @Field(() => BigIntFilter, {
        nullable: true,
        description: undefined,
    })
    not?: BigInt | BigIntFilter | null;
}
