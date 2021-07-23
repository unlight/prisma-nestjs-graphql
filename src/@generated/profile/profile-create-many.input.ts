import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ProfileCreateManyInput {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => String, { nullable: false })
    userId!: string;

    @Field(() => String, { nullable: true })
    dummy?: string;
}
