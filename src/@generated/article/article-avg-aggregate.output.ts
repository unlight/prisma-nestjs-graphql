import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ArticleAvgAggregate {
    @Field(() => Float, {
        nullable: true,
        description: undefined,
    })
    favoritesCount?: number;
}
