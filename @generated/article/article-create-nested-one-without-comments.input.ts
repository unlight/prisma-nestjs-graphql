import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';
import { Type } from 'class-transformer';
import { ArticleCreateOrConnectWithoutCommentsInput } from './article-create-or-connect-without-comments.input';
import { Prisma } from '@prisma/client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';

@InputType()
export class ArticleCreateNestedOneWithoutCommentsInput {

    @Field(() => ArticleCreateWithoutCommentsInput, {nullable:true})
    @Type(() => ArticleCreateWithoutCommentsInput)
    create?: ArticleCreateWithoutCommentsInput;

    @Field(() => ArticleCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => ArticleCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: ArticleCreateOrConnectWithoutCommentsInput;

    @Field(() => ArticleWhereUniqueInput, {nullable:true})
    @Type(() => ArticleWhereUniqueInput)
    connect?: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'slug'>;
}
