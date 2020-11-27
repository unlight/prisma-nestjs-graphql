import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Article } from '../article/article.model';

@ObjectType({})
export class Tag {
    @Field(() => ID, {
        nullable: false,
    })
    id!: string;

    @Field(() => String, {
        nullable: false,
    })
    name!: string;

    @Field(() => [Article], {
        nullable: true,
    })
    articles?: Array<Article>;
}
