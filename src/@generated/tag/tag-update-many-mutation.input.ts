import { Field, InputType } from '@nestjs/graphql';

@InputType({})
export class TagUpdateManyMutationInput {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    id?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    name?: string | null;
}
