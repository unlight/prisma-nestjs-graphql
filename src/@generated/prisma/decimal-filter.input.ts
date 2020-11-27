import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DecimalFilter {
    @Field(() => String, {
        nullable: true,
    })
    equals?: string | null;

    @Field(() => [String], {
        nullable: true,
    })
    in?: Array<string> | null;

    @Field(() => [String], {
        nullable: true,
    })
    notIn?: Array<string> | null;

    @Field(() => String, {
        nullable: true,
    })
    lt?: string;

    @Field(() => String, {
        nullable: true,
    })
    lte?: string;

    @Field(() => String, {
        nullable: true,
    })
    gt?: string;

    @Field(() => String, {
        nullable: true,
    })
    gte?: string;

    @Field(() => DecimalFilter, {
        nullable: true,
    })
    not?: string | DecimalFilter | null;
}
