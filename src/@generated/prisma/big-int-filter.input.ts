import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BigIntFilter {
    @Field(() => String, {
        nullable: true,
    })
    equals?: BigInt | null;

    @Field(() => [String], {
        nullable: true,
    })
    in?: Array<BigInt> | null;

    @Field(() => [String], {
        nullable: true,
    })
    notIn?: Array<BigInt> | null;

    @Field(() => String, {
        nullable: true,
    })
    lt?: BigInt;

    @Field(() => String, {
        nullable: true,
    })
    lte?: BigInt;

    @Field(() => String, {
        nullable: true,
    })
    gt?: BigInt;

    @Field(() => String, {
        nullable: true,
    })
    gte?: BigInt;

    @Field(() => BigIntFilter, {
        nullable: true,
    })
    not?: BigInt | BigIntFilter | null;
}
