import { Field, InputType } from '@nestjs/graphql';

import { TagCreateOrConnectWithoutArticlesInput } from './tag-create-or-connect-without-articles.input';
import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagCreateNestedManyWithoutArticlesInput {
    @Field(() => [TagCreateWithoutArticlesInput], { nullable: true })
    create?: Array<TagCreateWithoutArticlesInput>;

    @Field(() => [TagCreateOrConnectWithoutArticlesInput], { nullable: true })
    connectOrCreate?: Array<TagCreateOrConnectWithoutArticlesInput>;

    @Field(() => [TagWhereUniqueInput], { nullable: true })
    connect?: Array<TagWhereUniqueInput>;
}
