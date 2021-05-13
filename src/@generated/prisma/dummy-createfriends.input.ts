import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DummyCreatefriendsInput {
    @Field(() => [String], { nullable: false })
    set!: Array<string>;
}
