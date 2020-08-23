import { Field, InputType } from '@nestjs/graphql';

@InputType({})
export class DateTimeFilter {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    equals?: Date | string;

    @Field(() => DateTimeFilter, {
        nullable: true,
        description: undefined,
    })
    not?: Date | string | DateTimeFilter;

    @Field(() => [String], {
        nullable: true,
        description: undefined,
    })
    in?: Date | string | Array<Date | string>;

    @Field(() => [String], {
        nullable: true,
        description: undefined,
    })
    notIn?: Date | string | Array<Date | string>;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    lt?: Date | string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    lte?: Date | string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    gt?: Date | string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    gte?: Date | string;
}
