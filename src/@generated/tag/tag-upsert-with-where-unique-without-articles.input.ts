import { Field, InputType } from '@nestjs/graphql';

import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';
import { TagUpdateWithoutArticlesDataInput } from './tag-update-without-articles-data.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagUpsertWithWhereUniqueWithoutArticlesInput {
    @Field(() => TagWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: TagWhereUniqueInput;

    @Field(() => TagUpdateWithoutArticlesDataInput, {
        nullable: true,
        description: undefined,
    })
    update?: TagUpdateWithoutArticlesDataInput;

    @Field(() => TagCreateWithoutArticlesInput, {
        nullable: true,
        description: undefined,
    })
    create?: TagCreateWithoutArticlesInput;
}
