import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TagUpdateManyMutationInput {
    @Field(() => String, {
        nullable: true,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
    })
    name?: string;
}
