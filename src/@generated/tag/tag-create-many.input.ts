import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TagCreateManyInput {
    @Field(() => String, { nullable: true })
    id?: string;

    @Field(() => String, { nullable: false })
    name!: string;
}
