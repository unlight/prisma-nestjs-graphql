import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DummyWhereUniqueInput {
    @Field(() => String, { nullable: true })
    id?: string;
}
