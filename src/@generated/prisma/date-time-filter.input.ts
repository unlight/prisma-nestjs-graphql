import { Field, InputType } from '@nestjs/graphql';

@InputType({})
export class DateTimeFilter {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    equals?: string | null;

    @Field(() => DateTimeFilter, {
        nullable: true,
        description: undefined,
    })
    not?: string | DateTimeFilter | null;

    @Field(() => [String], {
        nullable: true,
        description: undefined,
    })
    in?: string | string[] | null;

    @Field(() => [String], {
        nullable: true,
        description: undefined,
    })
    notIn?: string | string[] | null;

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
}
