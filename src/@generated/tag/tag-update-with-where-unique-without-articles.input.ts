import { InputType, Field } from '@nestjs/graphql';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { TagUpdateWithoutArticlesDataInput } from './tag-update-without-articles-data.input';

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
