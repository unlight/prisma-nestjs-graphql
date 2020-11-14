import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DecimalFilter {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    equals?: string | null;

    @Field(() => [String], {
        nullable: true,
        description: undefined,
    })
    in?: Array<string> | null;

    @Field(() => [String], {
        nullable: true,
        description: undefined,
    })
    notIn?: Array<string> | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    lt?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    lte?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    gt?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    gte?: string;

    @Field(() => DecimalFilter, {
        nullable: true,
        description: undefined,
    })
    not?: string | DecimalFilter | null;
}
