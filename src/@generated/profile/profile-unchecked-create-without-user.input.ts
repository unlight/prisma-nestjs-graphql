import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ProfileUncheckedCreateWithoutUserInput {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => String, { nullable: true })
    dummy?: string;
}
