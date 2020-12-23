import { Field, InputType } from '@nestjs/graphql';

import { TagUpdateWithoutArticlesInput } from './tag-update-without-articles.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagUpdateWithWhereUniqueWithoutArticlesInput {
    @Field(() => TagWhereUniqueInput, {
        nullable: true,
    })
    where?: TagWhereUniqueInput;

    @Field(() => TagUpdateWithoutArticlesInput, {
        nullable: true,
    })
    data?: TagUpdateWithoutArticlesInput;
}
