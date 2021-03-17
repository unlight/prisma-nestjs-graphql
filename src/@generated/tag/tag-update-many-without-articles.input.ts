import { Field, InputType } from '@nestjs/graphql';

import { TagCreateOrConnectWithoutArticlesInput } from './tag-create-or-connect-without-articles.input';
import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';
import { TagScalarWhereInput } from './tag-scalar-where.input';
import { TagUpdateManyWithWhereWithoutArticlesInput } from './tag-update-many-with-where-without-articles.input';
import { TagUpdateWithWhereUniqueWithoutArticlesInput } from './tag-update-with-where-unique-without-articles.input';
import { TagUpsertWithWhereUniqueWithoutArticlesInput } from './tag-upsert-with-where-unique-without-articles.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagUpdateManyWithoutArticlesInput {
    @Field(() => [TagCreateWithoutArticlesInput], { nullable: true })
    create?: Array<TagCreateWithoutArticlesInput>;

    @Field(() => [TagCreateOrConnectWithoutArticlesInput], { nullable: true })
    connectOrCreate?: Array<TagCreateOrConnectWithoutArticlesInput>;

    @Field(() => [TagUpsertWithWhereUniqueWithoutArticlesInput], { nullable: true })
    upsert?: Array<TagUpsertWithWhereUniqueWithoutArticlesInput>;

    @Field(() => [TagWhereUniqueInput], { nullable: true })
    connect?: Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], { nullable: true })
    set?: Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], { nullable: true })
    disconnect?: Array<TagWhereUniqueInput>;

    @Field(() => [TagWhereUniqueInput], { nullable: true })
    delete?: Array<TagWhereUniqueInput>;

    @Field(() => [TagUpdateWithWhereUniqueWithoutArticlesInput], { nullable: true })
    update?: Array<TagUpdateWithWhereUniqueWithoutArticlesInput>;

    @Field(() => [TagUpdateManyWithWhereWithoutArticlesInput], { nullable: true })
    updateMany?: Array<TagUpdateManyWithWhereWithoutArticlesInput>;

    @Field(() => [TagScalarWhereInput], { nullable: true })
    deleteMany?: Array<TagScalarWhereInput>;
}
