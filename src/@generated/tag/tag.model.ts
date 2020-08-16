import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Article } from '../article/article.model';

@ObjectType({
    description: undefined,
})
export class Tag {
    @Field(() => ID, {
        nullable: false,
        description: undefined,
    })
    id!: string;

    @Field(() => String, {
        nullable: false,
        description: undefined,
    })
    name!: string;

    @Field(() => [Article], {
        nullable: true,
        description: undefined,
    })
    articles?: Article[] | null;
}
