import { Field, InputType } from '@nestjs/graphql';

@InputType({})
export class BooleanFilter {
    @Field(() => Boolean, {
        nullable: true,
        description: undefined,
    })
    equals?: boolean | null;

    @Field(() => BooleanFilter, {
        nullable: true,
        description: undefined,
    })
    not?: boolean | null | BooleanFilter;
}
