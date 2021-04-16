import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ArticleSumAggregate {
    @Field(() => Int, { nullable: true })
    favoritesCount?: number;
}
