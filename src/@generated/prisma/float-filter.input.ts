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
    in?: number | Array<number> | null;

    @Field(() => [Float], {
        nullable: true,
        description: undefined,
    })
    notIn?: number | Array<number> | null;

    @Field(() => Float, {
        nullable: true,
        description: undefined,
    })
    lt?: number | null;

    @Field(() => Float, {
        nullable: true,
        description: undefined,
    })
    lte?: number | null;

    @Field(() => Float, {
        nullable: true,
        description: undefined,
    })
    gt?: number | null;

    @Field(() => Float, {
        nullable: true,
        description: undefined,
    })
    gte?: number | null;

    @Field(() => FloatFilter, {
        nullable: true,
        description: undefined,
    })
    not?: number | FloatFilter | null;
}
