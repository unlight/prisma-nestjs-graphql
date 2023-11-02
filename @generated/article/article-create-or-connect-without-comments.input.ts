import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '../../prisma-client';
import { ArticleWhereUniqueInput } from './article-where-unique.input';
import { Type } from 'class-transformer';
import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';

@InputType()
export class ArticleCreateOrConnectWithoutCommentsInput {

    @Field(() => ArticleWhereUniqueInput, {nullable:false})
    @Type(() => ArticleWhereUniqueInput)
    where!: Prisma.AtLeast<ArticleWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ArticleCreateWithoutCommentsInput, {nullable:false})
    @Type(() => ArticleCreateWithoutCommentsInput)
    create!: ArticleCreateWithoutCommentsInput;
}
