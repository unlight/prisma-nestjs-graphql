import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BytesFilter {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    equals?: Buffer | null;

    @Field(() => BytesFilter, {
        nullable: true,
        description: undefined,
    })
    not?: Buffer | BytesFilter | null;
}
