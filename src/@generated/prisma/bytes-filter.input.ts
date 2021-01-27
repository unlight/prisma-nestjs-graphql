import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BytesFilter {
    @Field(() => String, {
        nullable: true,
    })
    equals?: Buffer;

    @Field(() => BytesFilter, {
        nullable: true,
    })
    not?: BytesFilter;
}
