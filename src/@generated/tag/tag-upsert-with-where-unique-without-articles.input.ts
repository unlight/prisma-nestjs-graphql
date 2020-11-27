import { Field, InputType } from '@nestjs/graphql';

import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';
import { TagUpdateWithoutArticlesInput } from './tag-update-without-articles.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagUpsertWithWhereUniqueWithoutArticlesInput {
    @Field(() => TagWhereUniqueInput, {
        nullable: true,
    })
    where?: TagWhereUniqueInput;

    @Field(() => TagUpdateWithoutArticlesInput, {
        nullable: true,
    })
    update?: TagUpdateWithoutArticlesInput;

    @Field(() => TagCreateWithoutArticlesInput, {
        nullable: true,
    })
    create?: TagCreateWithoutArticlesInput;
}
