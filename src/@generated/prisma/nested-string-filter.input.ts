import { Field, InputType } from '@nestjs/graphql';

@InputType({})
export class NestedStringFilter {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    equals?: string;

    @Field(() => [String], {
        nullable: true,
        description: undefined,
    })
    in?: string | Array<string>;

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

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    contains?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    startsWith?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    endsWith?: string;

    @Field(() => NestedStringFilter, {
        nullable: true,
        description: undefined,
    })
    not?: NestedStringFilter | null;
}
