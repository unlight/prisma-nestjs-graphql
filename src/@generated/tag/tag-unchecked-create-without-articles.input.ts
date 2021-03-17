import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TagUncheckedCreateWithoutArticlesInput {
    @Field(() => String, { nullable: true })
    id?: string;

    @Field(() => String, { nullable: false })
    name!: string;
}
