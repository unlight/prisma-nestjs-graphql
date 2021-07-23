import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProfileCreateWithoutUserInput {
    @Field(() => String, { nullable: true })
    dummy?: string;
}
