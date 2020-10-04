import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class FloatFilter {
    @Field(() => Float, {
        nullable: true,
        description: undefined,
    })
    equals?: number | null;

    @Field(() => [Float], {
        nullable: true,
        description: undefined,
    })
    in?: Array<number> | null;

    @Field(() => [Float], {
        nullable: true,
        description: undefined,
    })
    notIn?: Array<number> | null;

    @Field(() => Float, {
        nullable: true,
        description: undefined,
    })
    lt?: number;

    @Field(() => Float, {
        nullable: true,
        description: undefined,
    })
    lte?: number;

    @Field(() => Float, {
        nullable: true,
        description: undefined,
    })
    gt?: number;

    @Field(() => Float, {
        nullable: true,
        description: undefined,
    })
    gte?: number;

    @Field(() => FloatFilter, {
        nullable: true,
        description: undefined,
    })
    not?: number | FloatFilter | null;
}
