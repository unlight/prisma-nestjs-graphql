import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BoolFilter {
    @Field(() => Boolean, {
        nullable: true,
    })
    equals?: boolean;

    @Field(() => BoolFilter, {
        nullable: true,
    })
    not?: BoolFilter;
}
