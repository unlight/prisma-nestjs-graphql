import { InputType, Field } from '@nestjs/graphql';

@InputType({})
export class NestedDateTimeFilter {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    equals?: string | null;

    @Field(() => [String], {
        nullable: true,
        description: undefined,
    })
    in?: string[] | null;

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

    @Field(() => NestedDateTimeFilter, {
        nullable: true,
        description: undefined,
    })
    not?: NestedDateTimeFilter | null;
}
