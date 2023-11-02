import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';
import { Type } from 'class-transformer';
import { TagCreateOrConnectWithoutArticlesInput } from './tag-create-or-connect-without-articles.input';
import { Prisma } from '../../prisma-client';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagCreateNestedManyWithoutArticlesInput {

    @Field(() => [TagCreateWithoutArticlesInput], {nullable:true})
    @Type(() => TagCreateWithoutArticlesInput)
    create?: Array<TagCreateWithoutArticlesInput>;

    @Field(() => [TagCreateOrConnectWithoutArticlesInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutArticlesInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutArticlesInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;
}
