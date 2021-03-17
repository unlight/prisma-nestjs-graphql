import { Field, InputType } from '@nestjs/graphql';

import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagCreateOrConnectWithoutArticlesInput {
    @Field(() => TagWhereUniqueInput, { nullable: false })
    where!: TagWhereUniqueInput;

    @Field(() => TagCreateWithoutArticlesInput, { nullable: false })
    create!: TagCreateWithoutArticlesInput;
}
