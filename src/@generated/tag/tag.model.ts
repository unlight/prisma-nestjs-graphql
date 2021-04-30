import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Article } from '../article/article.model';
import { TagCount } from './tag-count.output';

@ObjectType()
export class Tag {
    @Field(() => ID, { nullable: false })
    id!: string;

    @Field(() => String, { nullable: false })
    name!: string;

    @Field(() => [Article], { nullable: true })
    articles!: Array<Article>;

    @Field(() => TagCount, { nullable: true })
    _count!: TagCount;
}
