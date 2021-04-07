import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserCount {
    @Field(() => Int, { nullable: false })
    following!: number;

    @Field(() => Int, { nullable: false })
    followers!: number;

    @Field(() => Int, { nullable: false })
    favoriteArticles!: number;

    @Field(() => Int, { nullable: false })
    articles!: number;

    @Field(() => Int, { nullable: false })
    comments!: number;
}
