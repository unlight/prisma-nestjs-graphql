import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ArticleCount {
    @Field(() => Int, { nullable: false })
    tags!: number;

    @Field(() => Int, { nullable: false })
    favoritedBy!: number;

    @Field(() => Int, { nullable: false })
    comments!: number;
}
