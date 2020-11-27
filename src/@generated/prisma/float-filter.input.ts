import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class FloatFilter {
    @Field(() => Float, {
        nullable: true,
    })
    equals?: number | null;

    @Field(() => [Float], {
        nullable: true,
    })
    in?: Array<number> | null;

    @Field(() => [Float], {
        nullable: true,
    })
    notIn?: Array<number> | null;

    @Field(() => Float, {
        nullable: true,
    })
    lt?: number;

    @Field(() => Float, {
        nullable: true,
    })
    lte?: number;

    @Field(() => Float, {
        nullable: true,
    })
    gt?: number;

    @Field(() => Float, {
        nullable: true,
    })
    gte?: number;

    @Field(() => FloatFilter, {
        nullable: true,
    })
    not?: number | FloatFilter | null;
}
