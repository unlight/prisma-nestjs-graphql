import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ArticleWhereUniqueInput {
    @Field(() => String, {
        nullable: true,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
    })
    slug?: string;
}
