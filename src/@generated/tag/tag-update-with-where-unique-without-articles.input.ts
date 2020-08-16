import { Field, InputType } from '@nestjs/graphql';

import { TagUpdateWithoutArticlesDataInput } from './tag-update-without-articles-data.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType({})
export class TagUpdateWithWhereUniqueWithoutArticlesInput {
    @Field(() => TagWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: TagWhereUniqueInput | null;

    @Field(() => TagUpdateWithoutArticlesDataInput, {
        nullable: true,
        description: undefined,
    })
    data?: TagUpdateWithoutArticlesDataInput | null;
}
