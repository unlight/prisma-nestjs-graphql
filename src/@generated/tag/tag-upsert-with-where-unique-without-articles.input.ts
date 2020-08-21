import { InputType, Field } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithoutArticlesDataInput } from './tag-update-without-articles-data.input';
import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';

@InputType({})
export class TagUpsertWithWhereUniqueWithoutArticlesInput {
    @Field(() => TagWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: TagWhereUniqueInput | null;

    @Field(() => TagUpdateWithoutArticlesDataInput, {
        nullable: true,
        description: undefined,
    })
    update?: TagUpdateWithoutArticlesDataInput | null;

    @Field(() => TagCreateWithoutArticlesInput, {
        nullable: true,
        description: undefined,
    })
    create?: TagCreateWithoutArticlesInput | null;
}
