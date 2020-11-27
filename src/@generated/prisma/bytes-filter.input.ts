import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BytesFilter {
    @Field(() => String, {
        nullable: true,
    })
    equals?: Buffer | null;

    @Field(() => BytesFilter, {
        nullable: true,
    })
    not?: Buffer | BytesFilter | null;
}
