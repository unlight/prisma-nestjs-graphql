import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BooleanFilter {
    @Field(() => Boolean, {
        nullable: true,
    })
    equals?: boolean | null;

    @Field(() => BooleanFilter, {
        nullable: true,
    })
    not?: boolean | BooleanFilter | null;
}
