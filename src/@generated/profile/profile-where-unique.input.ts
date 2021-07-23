import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ProfileWhereUniqueInput {
    @Field(() => Int, { nullable: true })
    id?: number;
}
