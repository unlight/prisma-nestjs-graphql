import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ArticleSumAggregate {
    @Field(() => Int, {
        nullable: false,
    })
    favoritesCount!: number;
}
