import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Recipe {
    @Field((type) => ID)
    id!: string;

    @Field(() => String)
    title!: string;

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => String)
    creationDate!: string;

    @Field((type) => [String])
    ingredients!: string[];
}
