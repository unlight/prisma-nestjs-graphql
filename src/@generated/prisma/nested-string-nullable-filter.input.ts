import { Field, InputType } from '@nestjs/graphql';

@InputType({})
export class NestedStringNullableFilter {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    equals?: string | null;

    @Field(() => [String], {
        nullable: true,
        description: undefined,
    })
    in?: string | Array<string> | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    lt?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    lte?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    gt?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    gte?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    contains?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    startsWith?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    endsWith?: string | null;

    @Field(() => NestedStringNullableFilter, {
        nullable: true,
        description: undefined,
    })
    not?: NestedStringNullableFilter | null;
}
