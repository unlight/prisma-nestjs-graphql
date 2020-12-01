import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DateTimeFilter {
    @Field(() => String, {
        nullable: true,
    })
    equals?: Date | string;

    @Field(() => [String], {
        nullable: true,
    })
    in?: Array<Date> | Array<string>;

    @Field(() => [String], {
        nullable: true,
    })
    notIn?: Array<Date> | Array<string>;

    @Field(() => String, {
        nullable: true,
    })
    lt?: Date | string;

    @Field(() => String, {
        nullable: true,
    })
    lte?: Date | string;

    @Field(() => String, {
        nullable: true,
    })
    gt?: Date | string;

    @Field(() => String, {
        nullable: true,
    })
    gte?: Date | string;

    @Field(() => DateTimeFilter, {
        nullable: true,
    })
    not?: Date | string | DateTimeFilter;
}
