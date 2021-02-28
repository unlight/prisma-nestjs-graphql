import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {
        nullable: true,
    })
    equals?: Date | string;

    @Field(() => [Date], {
        nullable: true,
    })
    in?: Array<Date> | Array<string>;

    @Field(() => [Date], {
        nullable: true,
    })
    notIn?: Array<Date> | Array<string>;

    @Field(() => Date, {
        nullable: true,
    })
    lt?: Date | string;

    @Field(() => Date, {
        nullable: true,
    })
    lte?: Date | string;

    @Field(() => Date, {
        nullable: true,
    })
    gt?: Date | string;

    @Field(() => Date, {
        nullable: true,
    })
    gte?: Date | string;

    @Field(() => DateTimeFilter, {
        nullable: true,
    })
    not?: DateTimeFilter;
}
