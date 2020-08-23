import { Field, InputType } from '@nestjs/graphql';

@InputType({})
export class TagWhereUniqueInput {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    name?: string;
}
