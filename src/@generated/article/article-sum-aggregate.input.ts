import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ArticleSumAggregateInput {
    @Field(() => Boolean, { nullable: true })
    favoritesCount?: true;
}
