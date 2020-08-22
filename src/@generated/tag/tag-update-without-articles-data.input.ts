import { Field, InputType } from '@nestjs/graphql';

@InputType({})
export class TagUpdateWithoutArticlesDataInput {
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
